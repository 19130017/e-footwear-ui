import { Box, Button, Typography } from "@mui/material";
import style from "./Auth.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";
const cx = classNames.bind(style);

function NotificationItem() {
    const navigate = useNavigate();
    return (
        <Box className={cx("wrapper")}>
            <Box className={cx("content")}>
                <TitleFullWidth cx={cx} title="Cấp lại mật khẩu" />
                <Box
                    sx={{
                        marginTop: "1.5rem",
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "450px",
                            height: "450",
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "5px",
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <Typography
                            variant=""
                            className={cx("text")}
                            sx={{ lineHeight: "25px", padding: "2rem" }}
                        >
                            Vui lòng kiểm tra email của bạn và làm theo hướng dẫn để được cấp lại
                            mật khẩu. Nếu không tìm thấy email trong hộp thư đến, vui lòng kiểm tra
                            hộp thư rác.
                        </Typography>

                        <Button
                            sx={{
                                marginTop: "1rem",
                                marginLeft: "25%",
                                marginBottom: "3rem",
                                width: "50%",
                                height: "50px",
                            }}
                            variant="contained"
                            className={cx("btn-login")}
                            onClick={() => navigate("/auth/sign-in")}
                        >
                            Quay lại trang đăng nhập
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default NotificationItem;
