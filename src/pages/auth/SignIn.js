import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { FacebookButton } from "~/components/button";
const cx = classNames.bind(style);

function SignIn() {
    return (
        <Box className={cx("wrapper")}>
            <Box className={cx("content")}>
                <Typography variant="h3" className={cx("title")}>
                    Đăng nhập
                </Typography>
                <Typography variant="body2" className={cx("sub-title")} sx={{ fontSize: "1.4rem" }}>
                    Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
                    <Link href="/auth/forgot" underline="none" sx={{ margin: "0 0.5rem" }}>
                        "Lấy mật khẩu"
                    </Link>
                    để có thể truy cập vào tài khoản bằng username nhé.
                </Typography>
                <form>
                    <Box>
                        <TextField
                            name="username"
                            variant="outlined"
                            placeholder="Username"
                            fullWidth
                            InputProps={{ style: { borderRadius: "1.5rem", fontSize: "1.4rem" } }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1.5rem" }}>
                        <TextField
                            type="password"
                            variant="outlined"
                            placeholder="Password"
                            fullWidth
                            name="password"
                            InputProps={{ style: { borderRadius: "1.5rem", fontSize: "1.4rem" } }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "1.5rem" }}>
                        <Button variant="contained" className={cx("btn-login")} fullWidth>
                            Đăng nhập
                        </Button>
                    </Box>
                </form>
                <Box>
                    <Typography className={cx("option")}>Hoặc</Typography>
                </Box>
                <FacebookButton cx={cx} />

                <Grid container sx={{ marginTop: "2rem" }}>
                    <Grid item xs={6}>
                        <Link href="/auth/sign-up" underline="none">
                            Đăng ký tài khoản mới
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link
                            href="/auth/forgot"
                            underline="none"
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
