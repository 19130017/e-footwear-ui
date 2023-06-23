import { Box, Button, IconButton, InputBase, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ComingSoon.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ComingSoon() {

    return (
        <Box className="coming-soon mt-0 h-screen w-full flex flex-col justify-center bg-coming-soon ">
            <Box className="heading flex justify-center" >
                <Typography className="title text-6xl lg:text-8xl leading-[110px] font-bold text-white uppercase m-[20px]">Coming Soon</Typography>
            </Box>
            <Box className="wrap-contact my-[20px] flex flex-col items-center">
                <Typography className="heading-contact mb-[20px] text-[1.5rem] leading-[1.5rem] text-white">Đăng kí ngay Email để nhận thông tin sớm nhất!</Typography>
                <Box className="wrap-input flex ">
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
                    <Box className="wrap-input-button bg-black w-[50px] flex items-center" >
                        <IconButton
                            aria-label="confirm"
                            className="icon-btn"

                        >
                            <ArrowForwardIcon className="icon text-[30px] text-white" />
                        </IconButton>
                    </Box>

                </Box>
            </Box>

            <Box className="social flex flex-col items-center my-[20px]">
                <Typography className="heading-social text-[1.5rem] leading-[1.5rem] text-white">Theo dõi chúng tôi trên các trang mạng xã hội:</Typography>
                <Box className="wrap-social flex my-[10px] ">
                    <Box component={Link}
                        to={"https://www.facebook.com/habafootwear"} className="social-item  mx-[20px]">
                        <FacebookIcon className="icon text-[50px] text-white" />
                    </Box>
                    <Box component={Link}
                        to={"https://www.instagram.com/"} className="social-item mx-[20px]">
                        <InstagramIcon className="icon text-[50px] text-white" />
                    </Box>
                    <Box component={Link}
                        to={"https://www.youtube.com/"} className="social-item mx-[20px]">
                        <YouTubeIcon className="icon text-[50px] text-white" />
                    </Box>
                </Box>
            </Box>
            <Box className="wrap-button flex justify-center">
                <Button component={Link}
                    to={"/"} className="back">Quay lại trang chủ</Button>
            </Box>

        </Box>
    );
}
export default ComingSoon;