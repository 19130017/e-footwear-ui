import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { Form, useForm } from "~/hooks/useForm";
import { Link } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
// import { FacebookButton } from "~/components/button";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "~/redux/auth/authSlice";
import Loading from "~/components/loading/Loading";
import { FacebookLogin, GoogleLogin } from "~/components/social-login";

function SignUp() {
    const dispatch = useDispatch();
    const textRef = useRef();
    const refPassword = textRef.current?.value;
    const { isLoading } = useSelector((state) => state.authReducer);

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
                if (
                    fieldValues.email.match(
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    )
                ) {
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
        <Box className="w-full flex items-center justify-center py-6">
            <Box className="w-1/2">
                <TitleFullWidth title="Đăng ký" />

                <Typography variant="body2" className="text-2xl text-center mb-4">
                    Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
                    <Link to="/auth/forgot" className="inline no-underline text-link mx-1">
                        "Quên mật khẩu"
                    </Link>
                    để có thể truy cập vào tài khoản bằng "Username" nhé.
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
                            fullWidth
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>
                    <Box className="mt-4">
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
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>
                    <Box className="mt-4">
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
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>
                    <Box className="mt-4">
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
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>

                    <Box className="mt-4">
                        <Button
                            type="submit"
                            variant="contained"
                            className="text-2xl rounded-2xl bg-black w-full p-4 normal-case"
                        >
                            Tạo tài khoản
                        </Button>
                    </Box>
                </Form>

                <Box>
                    <Typography
                        className="mt-8 text-center w-full text-2xl items-center flex justify-center
                                    after:content[''] after:h-0.5 after:bg-third after:flex-1
                                    before:content[''] before:h-0.5 before:bg-third before:flex-1"
                    >
                        Hoặc
                    </Typography>
                </Box>
                <Box className="flex pt-4 flex-wrap flex-col">
                    <GoogleLogin />
                    <FacebookLogin />
                </Box>
                <Grid container className="pt-8">
                    <Grid item xs={6}>
                        <Link to="/auth/sign-in" className="block no-underline text-link">
                            Đăng ký tài khoản mới
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to="/auth/forgot" className="block no-underline text-right text-link">
                            Quên mật khẩu
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Loading open={isLoading} />
        </Box>
    );
}

export default SignUp;
