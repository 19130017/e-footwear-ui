import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { Form, useForm } from "~/hooks/useForm";
import { Link } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
import { FacebookButton } from "~/components/button";
const cx = classNames.bind(style);
function SignUp() {
    const initialValues = {
        username: "",
        password: "",
        email: "",
        address: "",
        phone: "",
    };
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let tempEnable = { ...errorsEnable };
        if ("username" in fieldValues) {
            if (fieldValues.username === "") {
                tempEnable.username = true;
                temp.username = "Không được để trống.";
            } else {
                tempEnable.username = false;
                temp.username = "";
            }
        }
        if ("password" in fieldValues) {
            if (fieldValues.password === "") {
                tempEnable.password = true;
                temp.password = "Không được để trống.";
            } else {
                tempEnable.password = false;
                temp.password = "";
            }
        }
        if ("email" in fieldValues) {
            if (fieldValues.email === "") {
                tempEnable.email = true;
                temp.email = "Không được để trống.";
            } else {
                tempEnable.email = false;
                temp.email = "";
            }
        }
        if ("address" in fieldValues) {
            if (fieldValues.address === "") {
                tempEnable.address = true;
                temp.address = "Không được để trống.";
            } else {
                tempEnable.address = false;
                temp.address = "";
            }
        }
        if ("phone" in fieldValues) {
            if (fieldValues.phone === "") {
                tempEnable.phone = true;
                temp.phone = "Không được để trống.";
            } else {
                tempEnable.phone = false;
                temp.phone = "";
            }
        }

        setErrors({
            ...temp,
        });
        setErrorsEnable({
            ...tempEnable,
        });
        if (fieldValues === values) return Object.values(temp).every((x) => x === ""); // trả về boolean
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
    } = useForm(initialValues, true, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // xử lý tiếp
            resetForm();
        }
    };

    return (
        <Box className={cx("wrapper")}>
            <Box className={cx("content")}>
                <TitleFullWidth cx={cx} title="Đăng ký tài khoản" />
                <Typography variant="body2" className={cx("sub-title")} sx={{ fontSize: "1.4rem" }}>
                    Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
                    <Link href="/auth/forgot" underline="none" sx={{ margin: "0 0.5rem" }}>
                        "Lấy mật khẩu"
                    </Link>
                    để có thể truy cập vào tài khoản bằng username nhé.
                </Typography>

                <Form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            label="Tên đăng nhập"
                            autoComplete="off"
                            name="username"
                            variant="outlined"
                            placeholder="Username"
                            error={errorsEnable.username}
                            helperText={errors.username}
                            value={values.username}
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            fullWidth
                            InputProps={{
                                style: {
                                    borderRadius: "1.5rem",
                                    fontSize: "1.4rem",
                                },
                            }}
                            InputLabelProps={{
                                style: { fontSize: "1.6rem" },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                        <TextField
                            label="Mật khẩu"
                            type="password"
                            placeholder="***********"
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            name="password"
                            error={errorsEnable.password}
                            helperText={errors.password}
                            value={values.password}
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                                style: { borderRadius: "1.5rem", fontSize: "1.4rem" },
                            }}
                            InputLabelProps={{
                                style: { fontSize: "1.6rem" },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            //   placeholder="Email"
                            fullWidth
                            autoComplete="off"
                            name="email"
                            error={errorsEnable.email}
                            helperText={errors.email}
                            value={values.email}
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                                style: { borderRadius: "1.5rem", fontSize: "1.4rem" },
                            }}
                            InputLabelProps={{
                                style: { fontSize: "1.6rem" },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                        <TextField
                            label="Địa chỉ"
                            type="text"
                            variant="outlined"
                            //   placeholder="Address"
                            autoComplete="off"
                            name="address"
                            value={values.address}
                            helperText={errors.address}
                            error={errorsEnable.address}
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            fullWidth
                            InputProps={{
                                style: { borderRadius: "1.5rem", fontSize: "1.4rem" },
                            }}
                            InputLabelProps={{
                                style: { fontSize: "1.6rem" },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                        <TextField
                            label="Số điện thoại"
                            type="text"
                            variant="outlined"
                            //   placeholder="Phone Number"
                            autoComplete="off"
                            name="phone"
                            helperText={errors.phone}
                            value={values.phone}
                            error={errorsEnable.phone}
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            fullWidth
                            InputProps={{
                                style: { borderRadius: "1.5rem", fontSize: "1.4rem" },
                            }}
                            InputLabelProps={{
                                style: { fontSize: "1.6rem" },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={cx("btn-login")}
                            fullWidth
                        >
                            Đăng ký
                        </Button>
                    </Box>
                </Form>

                <Box>
                    <Typography className={cx("option")}>Hoặc</Typography>
                </Box>
                <FacebookButton cx={cx} />
                <Grid container sx={{ marginTop: "1rem" }}>
                    <Grid item xs={6}>
                        <Link to="/auth/sign-in" className={cx("btn")}>
                            Đăng nhập
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to="/auth/forgot" className={cx("btn", "btn-right")}>
                            Quên mật khẩu
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SignUp;
