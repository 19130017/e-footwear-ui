import { Box, Button, Grid, TextField } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
import { Form, useForm } from "~/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchForgotPassword } from "~/redux/auth/authSlice";
import Loading from "~/components/loading/Loading";

function Forgot() {
    const initialValues = {
        email: "",
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
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm,
    } = useForm(initialValues, true, validate);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.authReducer);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const response = await dispatch(fetchForgotPassword(values));
            if (response.payload.success) navigate("/auth/notification");
            resetForm();
        }
    };
    return (
        <Box className="w-full flex items-center justify-center py-6">
            <Box className="w-1/2">
                <TitleFullWidth title="Đăng nhập" />
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            autoComplete="off"
                            value={values.email}
                            placeholder="Nhập email của bạn"
                            onChange={handleInputChange}
                            error={errorsEnable.email}
                            helperText={errors.email}
                            fullWidth
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>
                    <Box className="mt-6">
                        <Button
                            type="submit"
                            variant="contained"
                            className="text-2xl rounded-2xl bg-black w-full p-4 normal-case"
                        >
                            Kiểm tra
                        </Button>
                    </Box>
                </Form>
                <Grid container className="pt-8">
                    <Grid item xs={6}>
                        <Link to="/auth/sign-in" className="block no-underline text-link">
                            Đăng nhập
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link
                            to="/auth/sign-up"
                            className="block no-underline text-right text-link"
                        >
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
