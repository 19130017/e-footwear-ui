import { Box, Button, IconButton, InputBase, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./ComingSoon.module.scss";
import classNames from "classnames/bind";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const cx = classNames.bind(style);

function ComingSoon() {

    return (
        <Box className={cx("not-found")}>
            <Box className={cx("heading")} >
                <Typography className={cx("title")}>Coming Soon</Typography>
            </Box>
            <Box className={cx("wrap-contact")}>
                <Typography className={cx("heading-contact")}>Đăng kí ngay Email để nhận thông tin sớm nhất!</Typography>
                <Box className={cx("wrap-input")}>
                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                            fontSize: "16px",
                            padding: "5px 0 5px 8px",
                            backgroundColor: "#fff",
                            width: "400px",
                        }}
                        type="email"
                        fullWidth
                    />
                    <Box className={cx("wrap-input-button")} >
                        <IconButton
                            aria-label="confirm"
                            className={cx("icon-btn")}

                        >
                            <ArrowForwardIcon className={cx("icon")} />
                        </IconButton>
                    </Box>

                </Box>
            </Box>

            <Box className={cx("social")}>
                <Typography className={cx("heading-social")}>Theo dõi chúng tôi trên các trang mạng xã hội:</Typography>
                <Box className={cx("wrap-social")}>
                    <Box component={Link}
                        to={"https://www.facebook.com/"} className={cx("social-item")}>
                        <FacebookIcon className={cx("icon")} />
                    </Box>
                    <Box component={Link}
                        to={"https://www.instagram.com/"} className={cx("social-item")}>
                        <InstagramIcon className={cx("icon")} />
                    </Box>
                    <Box component={Link}
                        to={"https://www.youtube.com/"} className={cx("social-item")}>
                        <YouTubeIcon className={cx("icon")} />
                    </Box>
                </Box>
            </Box>
            <Box className={cx("wrap-button")}>
                <Button component={Link}
                    to={"/"} className={cx("back")}>Quay lại trang chủ</Button>
            </Box>

        </Box>
    );
}
export default ComingSoon;