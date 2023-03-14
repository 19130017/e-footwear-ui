import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Form, useForm } from "~/hooks/useForm";
const cx = classNames.bind(style);

function ResetPasswod() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // xử lý tiếp
      resetForm();
    }
  };
  return (
    <Box className={cx("wrapper")} sx={{ marginTop: "50px" }}>
      <Box className={cx("content")}>
        <Typography className={cx("heading-reset")}>
          Cập nhật mật khẩu
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Box>
            <TextField
              name="password"
              variant="outlined"
              placeholder="Mật khẩu"
              autoComplete="off"
              value={values.password}
              onChange={handleInputChange}
              error={errorsEnable.password}
              helperText={errors.password}
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
            <TextField
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              variant="outlined"
              autoComplete="off"
              value={values.confirmPassword}
              onChange={handleInputChange}
              error={errorsEnable.confirmPassword}
              helperText={errors.confirmPassword}
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
              Thay đổi mật khẩu
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

export default ResetPasswod;
