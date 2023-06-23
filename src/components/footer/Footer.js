import { Box, Grid } from "@mui/material";
import "./Footer.scss";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Box className="footer w-full bg-black box-border pb-[30px]" component={"footer"}>
            <Grid container>
                <Grid item lg={3} md={4} className="wrap py-[20px] px-[30px]">
                    <h6 className="text-title text-white text-[20px] font-bold leading-[200%] mb-[20px] ">Về HB</h6>
                    <p className="introduce  text-[17px] font-thin text-gray_shadow mb-[20px] ">
                        Chúng tôi luôn lắng nghe luôn thấu hiểu và luôn cải thiện để đem đến trải
                        nghiệm tốt nhất cho khách hàng.
                    </p>
                </Grid>
                <Grid item lg={2} md={4} xs={6} className="wrap py-[20px] px-[30px]">
                    <h6 className="text-title text-[20px] font-bold leading-[200%] mb-[20px]  text-white">Dịch vụ khách hàng</h6>
                    <ul className="colorlib-footer-links">
                        <li className="lib-items list-none mt-[20px]">
                            <Link to={"/contact"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Liên hệ
                            </Link>
                        </li>
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Giảm giá
                            </Link>
                        </li>
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Danh sách yêu thích
                            </Link>
                        </li>
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Sản phẩm đặc biệt
                            </Link>
                        </li>
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Chăm sóc khách hàng
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item lg={2} md={4} xs={6} className="wrap py-[20px] px-[30px]">
                    <h6 className="text-title  text-white text-[20px] font-bold leading-[200%] mb-[20px] ">Thông tin</h6>
                    <ul className="colorlib-footer-links">
                        <li className="lib-items">
                            <Link to={"/about"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Về chúng tôi
                            </Link>
                        </li>
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Thông tin nhà vận chuyển
                            </Link>
                        </li>
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Quyền riêng tư
                            </Link>
                        </li>
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin">
                                Hỗ trợ
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item lg={2} md={4} xs={6} className="wrap py-[20px] px-[30px]">
                    <h6 className="text-title text-white text-[20px] font-bold leading-[200%] mb-[20px] ">Nổi bật</h6>
                    <ul className="colorlib-footer-links">
                        <li className="lib-items list-none mt-[20px] ">
                            <Link to={"/coming-soon"} className="link no-underline text-gray_shadow text-[17px] font-thin" href="">
                                Sản phẩm mới
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item lg={3} md={6} xs={6} className="wrap py-[20px] px-[30px]">
                    <h6 className="text-title  text-white text-[20px] font-bold leading-[200%] mb-[20px] ">Liên hệ</h6>
                    <div className="contact no-underline text-gray_shadow flex items-center mt-[20px] ">
                        <HomeIcon className="icon h-[30px] w-[30px] mr-[10px]"></HomeIcon>
                        <p className="contact-text text-[17px]  font-thin">
                            Khu phố 6, Thủ Đức, Thành Phố Hồ Chí Minh
                        </p>
                    </div>

                    <div className="contact no-underline text-gray_shadow flex items-center mt-[20px] ">
                        <PhoneIcon className="icon h-[30px] w-[30px] mr-[10px]"></PhoneIcon>
                        <p className="contact-text text-[17px] font-thin">+ 01 234 567 88 </p>
                    </div>
                    <div className="contact no-underline text-gray_shadow flex items-center mt-[20px] ">
                        <MailIcon className="icon h-[30px] w-[30px] mr-[10px]"></MailIcon>
                        <p className="contact-text text-[17px] font-thin leading-tight  break-all">haba@footwear.me </p>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
