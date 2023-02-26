import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Form, useForm } from "~/hooks/useForm";
import AccountHeader from "../header/AccountHeader";
import style from "./Account.module.scss";
const cx = classNames.bind(style);
function ChangePassword() {
    const initialFormValues = {
        currentPassword: "",
        newPassword: "",
        verifyPassword: "",
    };
    const validate = (fieldValues = values) => {
        const temp = { ...errors };
        const tempEnable = { ...errorsEnable };
        if ("currentPassword" in fieldValues) {
            if (fieldValues.currentPassword === "") {
                temp.currentPassword = "Vui lòng nhập mật khẩu";
                tempEnable.currentPassword = true;
            } else {
                temp.currentPassword = "";
                tempEnable.currentPassword = false;
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
                temp.verifyPassword = "Vui lòng nhập mật khẩu xác nhận";
                tempEnable.verifyPassword = true;
            } else {
                temp.verifyPassword = "";
                tempEnable.verifyPassword = false;
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
            console.log("submit");
        }
    };
    return (
        <Box className={cx("change-password-section")}>
            <AccountHeader
                title="Đổi mật khẩu"
                text="Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác"
            />
            <Grid container sx={{ paddingTop: "3rem" }} className={cx("content")}>
                <Grid item xs={8} sx={{ borderRight: "1px solid #efefef" }}>
                    <Form onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                            <Grid item xs={3}>
                                <Typography variant="body2" className={cx("text", "text-light")}>
                                    Mật Khẩu Hiện Tại
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    name="currentPassword"
                                    type="password"
                                    fullWidth
                                    value={values.currentPassword}
                                    onChange={handleInputChange}
                                    error={errorsEnable.currentPassword}
                                    helperText={errors.currentPassword}
                                    FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                    inputProps={{ style: { padding: "1.5rem 1rem" } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                            <Grid item xs={3}>
                                <Typography variant="body2" className={cx("text", "text-light")}>
                                    Mật Khẩu Mới
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    name="newPassword"
                                    type="password"
                                    fullWidth
                                    value={values.newPassword}
                                    onChange={handleInputChange}
                                    error={errorsEnable.newPassword}
                                    helperText={errors.newPassword}
                                    FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                    inputProps={{ style: { padding: "1.5rem 1rem" } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                            <Grid item xs={3}>
                                <Typography variant="body2" className={cx("text", "text-light")}>
                                    Xác Nhận Mật Khẩu
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    name="verifyPassword"
                                    type="password"
                                    fullWidth
                                    value={values.verifyPassword}
                                    onChange={handleInputChange}
                                    error={errorsEnable.verifyPassword}
                                    helperText={errors.verifyPassword}
                                    FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                    inputProps={{ style: { padding: "1.5rem 1rem" } }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center">
                            <Button variant="contained" type="submit">
                                Lưu
                            </Button>
                        </Grid>
                    </Form>
                </Grid>
                <Grid item xs={4} className={cx("forgot")}>
                    <Link to="/auth/forgot" className={cx("link")}>
                        Quên mật khẩu?
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ChangePassword;
