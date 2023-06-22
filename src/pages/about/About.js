import { Box, Grid, Link, Typography } from "@mui/material";
import "./About.scss";
function About() {
    return (
        <Box>
            <Box className="contact-bg">
                <Box className="review-bg bg-about pt-[50px]">
                    <Box className="container my-0 mx-auto">
                        <Grid className="bg-content pb-[100px]">
                            <Typography className="heading-about text-center font-bold text-[3rem] text-black pb-[1.2rem] ">Về HB Fashion</Typography>
                            <Typography className="content-about text-3xl text-center pb-[1.2rem]">HB Fashion cung cấp các sản phẩm giày nổi tiếng từ các thương hiệu đến từ
                                Việt Nam như Biti's, Ananas, Vina Giầy đến các thương
                                hiệu quốc tế như Adidas, Nike, Balenciaga.</Typography>
                            <Box className="button-contact">
                                <Link className="btn-contact">Kết nối với chúng tôi</Link>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <Box className="break-img bg-about-slogan mb-[100px] py-[200px] bg-cover bg-no-repeat bg-center w-full  ">
                </Box>
                <Box className="skill pb-[100px] w-full">
                    <Grid container direction="row">
                        <Grid item xs={4} className="wrap-slogan pb-[30px]">
                            <Box className="card-img pb-[30px] flex justify-center"><img src="https://raw.githubusercontent.com/catabada/fe-project/master/src/assets/image/langnghe.png" className="pl-[20px] w-[130px] h-[100px]" /></Box>
                            <Box className="card-content text-center mx-[10px]">
                                <Typography className="card-title text-4xl font-bold  mb-[20px]">Luôn lắng nghe</Typography>
                                <Typography className="card-sub text-[1.6rem] mb-2">Mọi vấn đề, mọi phản ảnh, đóng góp của khách hàng luôn được chúng tôi lắng nghe.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className="wrap-slogan pb-[30px]">
                            <Box className="card-img pb-[30px]  flex justify-center"><img src="https://raw.githubusercontent.com/catabada/fe-project/master/src/assets/image/thauhieu.png" className="pl-[20px] w-[130px] h-[100px]" /></Box>
                            <Box className="card-content text-center mx-[10px]">
                                <Typography className="card-title text-4xl font-bold mb-[20px]">Luôn thấu hiểu</Typography>
                                <Typography className="card-sub text-[1.6rem] mb-2">Mong muốn đáp ứng được đầy đủ yêu cầu của khách hàng khi đến cửa hàng của chúng tôi.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className="wrap-slogan pb-[30px]">
                            <Box className="card-img pb-[30px]  flex justify-center"><img src="https://raw.githubusercontent.com/catabada/fe-project/master/src/assets/image/caithien.png" className="pl-[20px] w-[130px] h-[100px]" /></Box>
                            <Box className="card-content text-center mx-[10px]">
                                <Typography className="card-title text-4xl font-bold  mb-[20px]">Luôn cản thiện</Typography>
                                <Typography className="card-sub text-[1.6rem] mb-2">Chúng tôi đã và đang cố gắng hoàn thiện chất lượng hơn để ngày càng phát triển phục vụ
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
