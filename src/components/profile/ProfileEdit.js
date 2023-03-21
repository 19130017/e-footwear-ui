import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm, Form } from "~/hooks/useForm";
import avatar from "~/assets/images/avatar.png";
import classNames from "classnames/bind";
import style from "./Profile.module.scss";
import AccountHeader from "../header/AccountHeader";
const cx = classNames.bind(style);

function ProfileEdit() {
    const initialFormValues = {
        username: "",
        email: "",
        phone: "",
        date: "",
    };
    const validate = (fieldValues = values) => {
        const temp = { ...errors };
        const tempEnable = { ...errorsEnable };
        if ("username" in fieldValues) {
            if (fieldValues.username === "") {
                temp.username = "Vui lòng nhập tên";
                tempEnable.username = true;
            } else {
                temp.username = "";
                tempEnable.username = false;
            }
        }
        if ("email" in fieldValues) {
            if (fieldValues.email === "") {
                temp.email = "Vui lòng nhập email";
                tempEnable.email = true;
            } else {
                temp.email = "";
                tempEnable.email = false;
            }
        }
        if ("phone" in fieldValues) {
            if (fieldValues.phone === "") {
                temp.phone = "Vui lòng nhập số điện thoai";
                tempEnable.phone = true;
            } else {
                temp.phone = "";
                tempEnable.phone = false;
            }
        }
        if ("date" in fieldValues) {
            if (fieldValues.date === "") {
                temp.date = "Vui lòng nhập ngày sinh";
                tempEnable.date = true;
            } else {
                temp.date = "";
                tempEnable.date = false;
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
        <Paper className={cx("profile-section")}>
            <AccountHeader
                title="Thông tin cá nhân"
                text="Quản lý thông tin hồ sơ để bảo mật tài khoản"
            />
            <Grid container sx={{ paddingTop: "3rem" }} className={cx("content")}>
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
                                    Bumpiz
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
                                    name="username"
                                    fullWidth
                                    value={values.username}
                                    onChange={handleInputChange}
                                    error={errorsEnable.username}
                                    helperText={errors.username}
                                    FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                    inputProps={{ style: { padding: "1.5rem 1rem" } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                            <Grid item xs={3}>
                                <Typography variant="body2" className={cx("text", "text-light")}>
                                    Email
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    name="email"
                                    type="email"
                                    fullWidth
                                    value={values.email}
                                    onChange={handleInputChange}
                                    error={errorsEnable.email}
                                    helperText={errors.email}
                                    FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                                    inputProps={{ style: { padding: "1.5rem 1rem" } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
                            <Grid item xs={3}>
                                <Typography variant="body2" className={cx("text", "text-light")}>
                                    Số điện thoại
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    name="phone"
                                    fullWidth
                                    value={values.phone}
                                    onChange={handleInputChange}
                                    error={errorsEnable.phone}
                                    helperText={errors.phone}
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
                                    name="date"
                                    type="date"
                                    fullWidth
                                    value={values.date}
                                    onChange={handleInputChange}
                                    error={errorsEnable.date}
                                    helperText={errors.date}
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
                <Grid item xs={4} className={cx("upload-avatar")}>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Avatar
                            component="label"
                            htmlFor="upload"
                            alt="Avatar"
                            src={avatar}
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
                        <input type="file" id="upload" name="upload" hidden />
                        <Box>
                            <Typography variant="body1" className={cx("text")}>
                                Định dạng:.JPEG, .PNG, .JPG
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ProfileEdit;
