import { Box, Grid, Link, Typography } from "@mui/material";
import style from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function About() {
    return (
        <Box>
            <Box className={cx("contact-bg")}>
                <Box className={cx("review-bg")}>
                    <Box className={cx("container")}>
                        <Grid item xs={8} className={cx("bg-content")}>
                            <Typography className={cx("heading-about")}>Về HB Fashion</Typography>
                            <Typography className={cx("content-about")}>HB Fashion cung cấp các sản phẩm giày nổi tiếng từ các thương hiệu đến từ
                                Việt Nam như Biti's, Ananas, Vina Giầy đến các thương
                                hiệu quốc tế như Adidas, Nike, Balenciaga.</Typography>
                            <Box className={cx("button-contact")}>
                                <Link className={cx("btn-contact")}>Kết nối với chúng tôi</Link>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <Box className={cx("break-img")}>
                </Box>
                <Box className={cx("skill")}>
                    <Grid container className={cx("container")}>
                        <Grid item xs={4} className={cx("wrap-slogan")}>
                            <Box className={cx("card-img")}><img src="https://raw.githubusercontent.com/catabada/fe-project/master/src/assets/image/langnghe.png" className={cx("slogan")} /></Box>
                            <Box className={cx("card-content")}>
                                <Typography className={cx("card-title")}>Luôn lắng nghe</Typography>
                                <Typography className={cx("card-sub")}>Mọi vấn đề, mọi phản ảnh, đóng góp của khách hàng luôn được chúng tôi lắng nghe.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={cx("wrap-slogan")}>
                            <Box className={cx("card-img")}><img src="https://raw.githubusercontent.com/catabada/fe-project/master/src/assets/image/thauhieu.png" className={cx("slogan")} /></Box>
                            <Box className={cx("card-content")}>
                                <Typography className={cx("card-title")}>Luôn thấu hiểu</Typography>
                                <Typography className={cx("card-sub")}>Mong muốn đáp ứng được đầy đủ yêu cầu của khách hàng khi đến cửa hàng của chúng tôi.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={cx("wrap-slogan")}>
                            <Box className={cx("card-img")}><img src="https://raw.githubusercontent.com/catabada/fe-project/master/src/assets/image/caithien.png" className={cx("slogan")} /></Box>
                            <Box className={cx("card-content")}>
                                <Typography className={cx("card-title")}>Luôn cải thiện</Typography>
                                <Typography className={cx("card-sub")}>Chúng tôi đã và đang cố gắng hoàn thiện chất lượng hơn để ngày càng phát triển phục vụ
                                    khách hàng ở mức độ hài lòng tốt nhất.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Box>


    );
}
export default About;
