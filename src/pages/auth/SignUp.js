import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { Form, useForm } from "~/hooks/useForm";
import { Link } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
import { FacebookButton } from "~/components/button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchRegister } from "~/toolkits/auth/authSlice";

const cx = classNames.bind(style);
function SignUp() {
    const dispatch = useDispatch();
    const textRef = useRef();
    const refPassword = textRef.current?.value;
    const initialValues = {
        username: "",
        password: "",
        email: "",
        rePassword: "",
    };
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let tempEnable = { ...errorsEnable };
        if ("username" in fieldValues) {
            if (fieldValues.username === "") {
                tempEnable.username = true;
                temp.username = "Không được để trống.";
            } else {
                if (fieldValues.username.length >= 5) {
                    tempEnable.username = false;
                    temp.username = "";
                } else {
                    tempEnable.username = true;
                    temp.username = "Username ít nhất phải 5 ký tự";
                }
            }
        }
        if ("password" in fieldValues) {
            if (fieldValues.password === "") {
                tempEnable.password = true;
                temp.password = "Không được để trống.";
            } else {
                if (fieldValues.password.length >= 8) {
                    temp.password = "";
                    tempEnable.password = false;
                } else {
                    temp.password = "Mật khẩu phải có ít nhất 8 ký tự";
                    tempEnable.password = true;
                }
            }
        }
        if ("rePassword" in fieldValues) {
            if (fieldValues.rePassword === "") {
                tempEnable.rePassword = true;
                temp.rePassword = "Không được để trống.";
            } else {
                if (fieldValues.rePassword === refPassword) {
                    tempEnable.rePassword = false;
                    temp.rePassword = "";
                } else {
                    temp.rePassword = "Không khớp với mật khẩu. Vui lòng nhập lại.";
                    tempEnable.rePassword = true;
                }
            }
        }
        if ("email" in fieldValues) {
            if (fieldValues.email !== "") {
                if (/$^|.+@.+..+/.test(fieldValues.email)) {
                    temp.email = "";
                    tempEnable.email = false;
                } else {
                    temp.email = "Không đúng định dạng email";
                    tempEnable.email = true;
                }
            } else {
                temp.email = "Không được để trống";
                tempEnable.email = true;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            await dispatch(fetchRegister(values));
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
                            label="Email"
                            type="email"
                            variant="outlined"
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
                            inputRef={textRef}
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
                            label="Nhập lại mật khẩu"
                            type="password"
                            placeholder="***********"
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            name="rePassword"
                            error={errorsEnable.rePassword}
                            helperText={errors.rePassword}
                            value={values.rePassword}
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
