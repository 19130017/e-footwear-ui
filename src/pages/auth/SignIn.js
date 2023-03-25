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
    const { accessToken, userId } = useSelector((state) => state.authReducer);
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
        if (accessToken && userId) navigate("/");
    }, [accessToken, navigate]);
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
                    để có thể truy cập vào tài khoản bằng username nhé.
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            autoComplete="off"
                            label="Username / Email"
                            name="username"
                            variant="outlined"
                            placeholder="Username"
                            fullWidth
                            onChange={handleInputChange}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            error={errorsEnable.username}
                            value={values.username}
                            helperText={errors.username}
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
