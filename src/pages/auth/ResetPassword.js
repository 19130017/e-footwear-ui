import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Form, useForm } from "~/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/Loading";
import { fetchResetPassword } from "~/redux/auth/authSlice";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";

function ResetPassword() {
    const initialValues = {
        password: "",
        confirmPassword: "",
    };

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let tempEnable = { ...errorsEnable };
        if ("password" in fieldValues) {
            if (fieldValues.password === "") {
                tempEnable.password = true;
                temp.password = "Không được để trống.";
            } else {
                tempEnable.password = false;
                temp.password = "";
            }
        }
        if ("confirmPassword" in fieldValues) {
            if (fieldValues.confirmPassword === "") {
                tempEnable.confirmPassword = true;
                temp.confirmPassword = "Không được để trống.";
            } else if (fieldValues.confirmPassword !== values.password) {
                tempEnable.confirmPassword = true;
                temp.confirmPassword = "Mật khẩu không khớp.";
            } else {
                tempEnable.confirmPassword = false;
                temp.confirmPassword = "";
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

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.authReducer);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const response = await dispatch(
                fetchResetPassword({ token: params.token, newPassword: values.password })
            );
            if (response.payload.success) navigate("/auth/sign-in");
            resetForm();
        }
    };
    return (
        <Box className="w-full flex items-center justify-center py-6">
            <Box className="w-1/2">
                <TitleFullWidth title="Cập nhật mật khẩu" />
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            name="password"
                            variant="outlined"
                            placeholder="Mật khẩu"
                            autoComplete="off"
                            type="password"
                            value={values.password}
                            onChange={handleInputChange}
                            error={errorsEnable.password}
                            helperText={errors.password}
                            fullWidth
                            FormHelperTextProps={{ className: "text-xl" }}
                            InputProps={{ className: "rounded-2xl text-2xl" }}
                            InputLabelProps={{
                                className: "text-2xl",
                            }}
                        />
                    </Box>
                    <Box className="mt-6">
                        <TextField
                            name="confirmPassword"
                            placeholder="Nhập lại mật khẩu"
                            variant="outlined"
                            autoComplete="off"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            error={errorsEnable.confirmPassword}
                            helperText={errors.confirmPassword}
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
                            Thay đổi mật khẩu
                        </Button>
                    </Box>
                </Form>
            </Box>
            <Loading open={isLoading} />
        </Box>
    );
}

export default ResetPassword;
