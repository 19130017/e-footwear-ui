import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Form, useForm } from "~/hooks/useForm";
import AccountHeader from "../header/AccountHeader";
import "./ChangePassword.scss";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChangePassword } from "~/redux/auth/authSlice";
function ChangePassword() {
    const initialFormValues = {
        oldPassword: "",
        newPassword: "",
        verifyPassword: "",
    };
    const textRef = useRef();
    const refPassword = textRef.current?.value;
    const dispatch = useDispatch();
    const { accountId, accessToken } = useSelector((state) => state.authReducer);

    const validate = (fieldValues = values) => {
        const temp = { ...errors };
        const tempEnable = { ...errorsEnable };
        if ("oldPassword" in fieldValues) {
            if (fieldValues.oldPassword === "") {
                temp.oldPassword = "Vui lòng nhập mật khẩu";
                tempEnable.oldPassword = true;
            } else {
                temp.oldPassword = "";
                tempEnable.oldPassword = false;
            }
        }
        if ("newPassword" in fieldValues) {
            if (fieldValues.newPassword === "") {
                temp.newPassword = "Vui lòng nhập mật khẩu mới";
                tempEnable.newPassword = true;
            } else {
                temp.newPassword = "";
                tempEnable.newPassword = false;
            }
        }
        if ("verifyPassword" in fieldValues) {
            if (fieldValues.verifyPassword === "") {
                tempEnable.verifyPassword = true;
                temp.verifyPassword = "Không được để trống.";
            } else {
                if (fieldValues.verifyPassword === refPassword) {
                    tempEnable.verifyPassword = false;
                    temp.verifyPassword = "";
                } else {
                    temp.verifyPassword = "Không khớp với mật khẩu. Vui lòng nhập lại.";
                    tempEnable.verifyPassword = true;
                }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            await dispatch(
                fetchChangePassword({
                    id: accountId,
                    accessToken,
                    newPassword: values.newPassword,
                    oldPassword: values.oldPassword,
                })
            );
            resetForm();
        }
    };
    return (
        <Paper className="bg-white mx-4 p-8 rounded-2xl">
            <AccountHeader
                title="Đổi mật khẩu"
                text="Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác"
            />
            <Grid container className="pt-10 flex-col">
                <Grid item xs={12} md={9} lg={9} className="border-r border-solid border-secondary">
                    <Form onSubmit={handleSubmit}>
                        <Grid container spacing={2} className="pt-12 items-center">
                            <Grid item xs={12} md={3} lg={3}>
                                <Typography
                                    variant="body2"
                                    className="text-2xl lg:text-end text-light-black"
                                >
                                    Mật Khẩu Hiện Tại
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <TextField
                                    name="oldPassword"
                                    type="password"
                                    fullWidth
                                    value={values.oldPassword}
                                    onChange={handleInputChange}
                                    error={errorsEnable.oldPassword}
                                    helperText={errors.oldPassword}
                                    FormHelperTextProps={{ className: "text-xl" }}
                                    InputProps={{ className: "rounded-2xl text-2xl" }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="pt-12 items-center">
                            <Grid item xs={12} md={3} lg={3}>
                                <Typography
                                    variant="body2"
                                    className="text-2xl lg:text-end normal-case text-light-black"
                                >
                                    Mật Khẩu Mới
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <TextField
                                    inputRef={textRef}
                                    name="newPassword"
                                    type="password"
                                    fullWidth
                                    value={values.newPassword}
                                    onChange={handleInputChange}
                                    error={errorsEnable.newPassword}
                                    helperText={errors.newPassword}
                                    FormHelperTextProps={{ className: "text-xl" }}
                                    InputProps={{ className: "rounded-2xl text-2xl" }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="pt-12 items-center">
                            <Grid item xs={12} md={3} lg={3}>
                                <Typography
                                    variant="body2"
                                    className="text-2xl lg:text-end normal-case text-light-black"
                                >
                                    Xác Nhận Mật Khẩu
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <TextField
                                    name="verifyPassword"
                                    type="password"
                                    fullWidth
                                    value={values.verifyPassword}
                                    onChange={handleInputChange}
                                    error={errorsEnable.verifyPassword}
                                    helperText={errors.verifyPassword}
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
                    <Link
                        to="/auth/forgot"
                        className="no-underline text-link inline-block ml-8 text-2xl"
                    >
                        Quên mật khẩu?
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ChangePassword;
