import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { FacebookButton } from "~/components/button";
import { Form, useForm } from "~/hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "~/redux/auth/authSlice";
import { useEffect } from "react";
const cx = classNames.bind(style);

function SignIn() {
    const { accountId, accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let tempEnable = { ...errorsEnable };
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
        setValues,
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm,
    } = useForm(initialValues, true, validate);

    useEffect(() => {
        if (accountId && accessToken) navigate("/");
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
        <Box className={cx("wrapper")}>
            <Box className={cx("content")}>
                <TitleFullWidth cx={cx} title=" Đăng nhập" />

                <Typography variant="body2" className={cx("sub-title")} sx={{ fontSize: "1.4rem" }}>
                    Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
                    <Link to="/auth/forgot" className={cx("btn", "btn--inline")}>
                        "Lấy mật khẩu"
                    </Link>
                    để có thể truy cập vào tài khoản bằng email nhé.
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            autoComplete="off"
                            label="Email"
                            name="email"
                            variant="outlined"
                            placeholder="Nhập email bạn đã đăng ký"
                            fullWidth
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            error={errorsEnable.email}
                            value={values.email}
                            helperText={errors.email}
                            InputProps={{ style: { borderRadius: "1.5rem", fontSize: "1.4rem" } }}
                            InputLabelProps={{
                                style: { fontSize: "1.6rem" },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1.5rem" }}>
                        <TextField
                            label="Mật khẩu "
                            type="password"
                            variant="outlined"
                            placeholder="***********"
                            fullWidth
                            name="password"
                            autoComplete="off"
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            error={errorsEnable.password}
                            value={values.password}
                            helperText={errors.password}
                            InputProps={{ style: { borderRadius: "1.5rem", fontSize: "1.4rem" } }}
                            InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1.5rem" }}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={cx("btn-login")}
                            fullWidth
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                </Form>
                <Box>
                    <Typography className={cx("option")}>Hoặc</Typography>
                </Box>
                <FacebookButton cx={cx} />

                <Grid container sx={{ marginTop: "2rem" }}>
                    <Grid item xs={6}>
                        <Link to="/auth/sign-up" className={cx("btn")}>
                            Đăng ký tài khoản mới
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link
                            to="/auth/forgot"
                            className={cx("btn", "btn-right")}
                            sx={{ textAlign: "right", display: "block" }}
                        >
                            Quên mật khẩu
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SignIn;
