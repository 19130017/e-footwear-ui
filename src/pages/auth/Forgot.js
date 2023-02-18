import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function Forgot() {
    return (
        <Box className={cx("wrapper")}>
            <Box className={cx("content")}>
                <Typography variant="h3" className={cx("title")}>
                    Cấp lại mật khẩu
                </Typography>
                <form>
                    <Box>
                        <TextField
                            name="email"
                            variant="outlined"
                            placeholder="Email"
                            fullWidth
                            InputProps={{ style: { borderRadius: "1.5rem", fontSize: "1.4rem" } }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1.5rem" }}>
                        <Button variant="contained" className={cx("btn-login")} fullWidth>
                            Kiểm tra
                        </Button>
                    </Box>
                </form>
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
