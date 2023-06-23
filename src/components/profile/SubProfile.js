import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Form, useForm } from "~/hooks/useForm";
import { fetchUpdateProfile, fetchUploadAvatar } from "~/redux/customer/customerSlice";
import "./Profile.scss";
import MySwal from "~/utils/MySwal";
import Loading from "../loading/Loading";
import { useEffect } from "react";

function SubProfile({ customer }) {
    const { accountId, accessToken, username } = useSelector((state) => state.authReducer);
    const { isLoading } = useSelector((state) => state.customerReducer);
    const dispatch = useDispatch();
    const initialFormValues = {
        firstName: customer?.firstName ? customer.firstName : "",
        lastName: customer?.lastName ? customer.lastName : "",
        birthday: customer?.birthday ? customer.birthday : "",
    };

    const validate = (fieldValues = values) => {
        const temp = { ...errors };
        const tempEnable = { ...errorsEnable };
        if ("firstName" in fieldValues) {
            if (fieldValues.firstName === "") {
                temp.firstName = "Vui lòng nhập tên";
                tempEnable.firstName = true;
            } else {
                temp.firstName = "";
                tempEnable.firstName = false;
            }
        }
        if ("lastName" in fieldValues) {
            if (fieldValues.lastName === "") {
                temp.lastName = "Vui lòng nhập họ và tên đệm";
                tempEnable.lastName = true;
            } else {
                temp.lastName = "";
                tempEnable.lastName = false;
            }
        }
        if ("birthday" in fieldValues) {
            if (fieldValues.birthday === "") {
                temp.birthday = "Vui lòng nhập ngày sinh";
                tempEnable.birthday = true;
            } else {
                temp.birthday = "";
                tempEnable.birthday = false;
            }
        }

        setErrors({ ...temp });
        setErrorsEnable({ ...tempEnable });
        if (fieldValues === values) {
            return Object.values(temp).every((x) => x === "");
        }
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm,
    } = useForm(initialFormValues, true, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(
                fetchUpdateProfile({
                    customerInfo: { ...values, accountId },
                    accessToken: accessToken,
                })
            );
        }
    };

    const handleChange = async (e) => {
        const file = e.target.files[0];
        if (file.size > 1048576) {
            return MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ảnh phải có size nhỏ hơn 1MB",
            });
        }

        const formData = new FormData();
        formData.append("avatar", file);
        formData.append("accountId", accountId);
        const response = await dispatch(
            fetchUploadAvatar({
                content: formData,
                accessToken,
            })
        );
        if (response.payload.success) window.location.reload();
    };

    return (
        <Grid container className="pt-10 flex-col-reverse">
            <Loading open={isLoading} />
            <Grid item xs={12} md={9} lg={9} className="border-r border-solid border-secondary">
                <Form onSubmit={handleSubmit}>
                    {username && (
                        <Grid container spacing={2} className="pt-12 lg:items-center">
                            <Grid item xs={6}>
                                <Typography
                                    variant="body2"
                                    className="text-2xl ld:text-end text-light-black"
                                >
                                    Tên đăng nhập
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" className="text-third text-2xl">
                                    {username}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                    <Grid container spacing={2} className="pt-12 lg:items-center flex-col">
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="text-2xl ld:text-end text-light-black"
                            >
                                Tên
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="firstName"
                                fullWidth
                                value={values.firstName}
                                onChange={handleInputChange}
                                error={errorsEnable.firstName}
                                helperText={errors.firstName}
                                FormHelperTextProps={{ className: "text-xl" }}
                                InputProps={{ className: "rounded-2xl text-2xl" }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="pt-12 flex-col lg:items-center">
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="text-2xl ld:text-end text-light-black"
                            >
                                Họ và tên đệm
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="lastName"
                                type="lastName"
                                fullWidth
                                value={values.lastName}
                                onChange={handleInputChange}
                                error={errorsEnable.lastName}
                                helperText={errors.lastName}
                                FormHelperTextProps={{ className: "text-xl" }}
                                InputProps={{ className: "rounded-2xl text-2xl" }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="pt-12 flex-col lg:items-center">
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="text-2xl ld:text-end text-light-black"
                            >
                                Ngày sinh
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="birthday"
                                type="date"
                                fullWidth
                                value={values.birthday}
                                onChange={handleInputChange}
                                error={errorsEnable.birthday}
                                helperText={errors.birthday}
                                FormHelperTextProps={{ className: "text-xl" }}
                                InputProps={{ className: "rounded-2xl text-2xl" }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="justify-center mt-6">
                        <Button
                            variant="contained"
                            type="submit"
                            className="p-4 text-white bg-black w-1/2"
                        >
                            Lưu
                        </Button>
                    </Grid>
                </Form>
            </Grid>
            <Grid item xs={12} md={3} lg={3} className="mt-8">
                <Grid container className="justify-center flex-col items-center">
                    <Avatar
                        component="label"
                        htmlFor="upload"
                        alt="Avatar"
                        src={customer?.avatar}
                        className="h-[100px] w-[100px] border border-solid border-gray cursor-pointer"
                    />
                    <Box
                        component="label"
                        htmlFor="upload"
                        variant="body1"
                        className="mt-8 border border-solid boder-gray text-xl p-2 cursor-pointer rounded-lg"
                    >
                        Chọn ảnh
                    </Box>
                    <input
                        type="file"
                        id="upload"
                        name="upload"
                        hidden
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => handleChange(e)}
                    />
                    <Box className="mb-8">
                        <Typography variant="body1" className="text-third text-xl mt-8">
                            Định dạng:.JPEG, .PNG, .JPG
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SubProfile;
