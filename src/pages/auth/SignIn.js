import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Form, useForm } from "~/hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "~/redux/auth/authSlice";
import { useEffect } from "react";
import Loading from "~/components/loading/Loading";
import { FacebookLogin, GoogleLogin } from "~/components/social-login";

function SignIn() {
    const { accountId, accessToken, isLoading } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        username: "",
        password: "",
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
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm,
    } = useForm(initialValues, true, validate);

    useEffect(() => {
        if (accessToken !== "" && accountId !== 0) {
            navigate("/");
        }
    }, [accountId, accessToken]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            // xử lý tiếp
            await dispatch(fetchLogin(values));
            resetForm();
        }
    };

    return (
        <Box className="w-full flex items-center justify-center py-6">
            <Box className="w-1/2">
                <TitleFullWidth title="Đăng nhập" />

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
                            autoComplete="off"
                            label="Tên tài khoản"
                            name="username"
                            variant="outlined"
                            placeholder="Tên tài khoản"
                            fullWidth
                            onChange={handleInputChange}
                            error={errorsEnable.username}
                            value={values.username}
                            helperText={errors.username}
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>
                    <Box className="pt-6">
                        <TextField
                            label="Mật khẩu"
                            type="password"
                            variant="outlined"
                            placeholder="***********"
                            fullWidth
                            name="password"
                            autoComplete="off"
                            onChange={handleInputChange}
                            error={errorsEnable.password}
                            value={values.password}
                            helperText={errors.password}
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>
                    <Box className="pt-6">
                        <Button
                            type="submit"
                            variant="contained"
                            className="text-2xl rounded-2xl bg-black w-full p-4 normal-case"
                        >
                            Đăng nhập
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
                        <Link to="/auth/sign-up" className="block no-underline text-link">
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

export default SignIn;
