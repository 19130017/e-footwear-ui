import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
import { Form, useForm } from "~/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchForgotPassword } from "~/redux/auth/authSlice";
import Loading from "~/components/loading/Loading";
const cx = classNames.bind(style);

function Forgot() {
    const initialValues = {
        email: "",
    };
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.authReducer);
    const navigate = useNavigate();
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
        setErrors({
            ...temp,
        });
        setErrorsEnable({
            ...tempEnable,
        });
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
    } = useForm(initialValues, true, validate);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const response = await dispatch(fetchForgotPassword(values));
            if (response.payload.success) navigate("/auth/sign-in");
            resetForm();
        }
    };
    return (
        <Box className={cx("wrapper")}>
            <Box className={cx("content")}>
                <TitleFullWidth cx={cx} title="Cấp lại mật khẩu" />
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            //   placeholder="Email"
                            autoComplete="off"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errorsEnable.email}
                            helperText={errors.email}
                            fullWidth
                            FormHelperTextProps={{ style: { fontSize: "1.4rem" } }}
                            InputProps={{
                                style: { borderRadius: "1.5rem", fontSize: "1.4rem" },
                            }}
                            InputLabelProps={{
                                style: { fontSize: "1.4rem" },
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1.5rem" }}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={cx("btn-login")}
                            fullWidth
                        >
                            Kiểm tra
                        </Button>
                    </Box>
                </Form>
                <Box>
                    <Typography className={cx("option")}>Hoặc</Typography>
                </Box>
                <Grid container sx={{ marginTop: "2rem" }}>
                    <Grid item xs={6}>
                        <Link to="/auth/sign-in" className={cx("btn")}>
                            Đăng nhập
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to="/auth/sign-up" className={cx("btn", "btn-right")}>
                            Đăng ký tài khoản mới
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Loading open={isLoading} />
        </Box>
    );
}

export default Forgot;
