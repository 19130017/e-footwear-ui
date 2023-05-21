import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Form, useForm } from "~/hooks/useForm";
import { fetchUpdateProfile, fetchUploadAvatar } from "~/redux/customer/customerSlice";
import classNames from "classnames/bind";
import style from "./Profile.module.scss";
import MySwal from "~/utils/MySwal";
import Loading from "../loading/Loading";
import { useEffect } from "react";

const cx = classNames.bind(style);

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
        if (file.size > 2097152) {
            return MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ảnh phải có size nhỏ hơn 2MB",
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
        <Grid container sx={{ paddingTop: "3rem" }} className={cx("content")}>
            <Loading open={isLoading} />

            <Grid item xs={8} sx={{ borderRight: "1px solid #efefef" }}>
                <Form onSubmit={handleSubmit}>
                    <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                        <Grid item xs={3}>
                            <Typography variant="body2" className={cx("text", "text-light")}>
                                Tên đăng nhập
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body2" className={cx("text")}>
                                {username}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                        <Grid item xs={3}>
                            <Typography variant="body2" className={cx("text", "text-light")}>
                                Tên
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                name="firstName"
                                fullWidth
                                value={values.firstName}
                                onChange={handleInputChange}
                                error={errorsEnable.firstName}
                                helperText={errors.firstName}
                                FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                inputProps={{ style: { padding: "1.5rem 1rem" } }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                        <Grid item xs={3}>
                            <Typography variant="body2" className={cx("text", "text-light")}>
                                Họ và tên đệm
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                name="lastName"
                                type="lastName"
                                fullWidth
                                value={values.lastName}
                                onChange={handleInputChange}
                                error={errorsEnable.lastName}
                                helperText={errors.lastName}
                                FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                inputProps={{ style: { padding: "1.5rem 1rem" } }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                        <Grid item xs={3}>
                            <Typography variant="body2" className={cx("text", "text-light")}>
                                Ngày sinh
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                name="birthday"
                                type="date"
                                fullWidth
                                value={values.birthday}
                                onChange={handleInputChange}
                                error={errorsEnable.birthday}
                                helperText={errors.birthday}
                                FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                inputProps={{ style: { padding: "1.5rem 1rem" } }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button variant="contained" type="submit" className={cx("btn-save")}>
                            Lưu
                        </Button>
                    </Grid>
                </Form>
            </Grid>
            <Grid item xs={4} className={cx("upload-avatar")}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Avatar
                        component="label"
                        htmlFor="upload"
                        alt="Avatar"
                        src={customer?.avatar}
                        className={cx("avatar")}
                    />
                    <Box
                        component="label"
                        htmlFor="upload"
                        variant="body1"
                        className={cx("label-name")}
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
                    <Box>
                        <Typography variant="body1" className={cx("text")}>
                            Định dạng:.JPEG, .PNG, .JPG
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SubProfile;
