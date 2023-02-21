import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { Form, useForm } from "~/hooks/useForm";
const cx = classNames.bind(style);

function Forgot() {
  const initialValues = {
    email: "",
  };
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    let tempEnable = { ...errorsEnable };
    if ("email" in fieldValues) {
      if (fieldValues.email === "") {
        tempEnable.email = true;
        temp.email = "Không được để trống.";
      } else {
        tempEnable.email = false;
        temp.email = "";
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
    <Box className={cx("wrapper")}>
      <Box className={cx("content")}>
        <Typography variant="h3" className={cx("title")}>
          Cấp lại mật khẩu
        </Typography>
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
              FormHelperTextProps={{style: {fontSize: "1.4rem"}}}
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
            <Link href="/auth/sign-in" underline="none">
              Đăng nhập
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="/auth/sign-up"
              underline="none"
              sx={{ textAlign: "right", display: "block" }}
            >
              Đăng ký tài khoản mới
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Forgot;
