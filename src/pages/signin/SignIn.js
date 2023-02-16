import { Box, Button, TextField, Typography } from "@mui/material";
import style from "./SignIn.module.scss";
import classNames from "classnames/bind";
import FacebookIcon from "@mui/icons-material/Facebook";
const cx = classNames.bind(style);

function SignIn() {
    return (
        <Box className={cx("wrapper")}>
            <Box className={cx("content")}>
                <Typography variant="h3" className={cx("title")}>
                    Đăng nhập
                </Typography>
                <Typography variant="body2" className={cx("sub-title")} sx={{ fontSize: "1.4rem" }}>
                    Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng "Lấy mật khẩu" để có thể truy cập vào tài khoản bằng email nhé.
                </Typography>
                <Box>
                    <TextField variant="outlined" placeholder="Username" fullWidth InputProps={{ style: { borderRadius: "1.5rem", fontSize: "1.4rem" } }} />
                </Box>
                <Box sx={{ marginTop: "1.5rem" }}>
                    <TextField
                        type="password"
                        variant="outlined"
                        placeholder="Password"
                        fullWidth
                        InputProps={{ style: { borderRadius: "1.5rem", fontSize: "1.4rem" } }}
                        
                    />
                </Box>
                <Box sx={{ marginTop: "1.5rem" }}>
                    <Button variant="contained" className={cx("btn-login")} fullWidth>
                        Đăng nhập
                    </Button>
                </Box>
                <Box>
                    <Typography className={cx("option")}>Hoặc</Typography>
                </Box>

                <Box sx={{ marginTop: "1.5rem" }}>
                    <Button variant="contained" className={cx("btn-facebook")} fullWidth>
                        Đăng nhập với <FacebookIcon sx={{ height: "2.4rem", width: "2.4rem", marginRight: "1rem" }} />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default SignIn;
