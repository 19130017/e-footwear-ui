import { Box, Grid } from "@mui/material";
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

function Footer() {
    return (
        <Box className={cx("footer")} component={"footer"}>
            <Grid container className={cx("container")}>
                <Grid item xs={3} className={cx("wrap")}>
                    <h6 className={cx("text-title")}>Về HB</h6>
                    <p className={cx("introduce")}>
                        Chúng tôi luôn lắng nghe luôn thấu hiểu và luôn cải thiện để đem đến trải
                        nghiệm tốt nhất cho khách hàng.
                    </p>
                </Grid>
                <Grid item xs={2} className={cx("wrap")}>
                    <h6 className={cx("text-title")}>Dịch vụ khách hàng</h6>
                    <ul className={cx("colorlib-footer-links")}>
                        <li className={cx("lib-items")}>
                            <Link to={"/contact"} className={cx("link")}>
                                Liên hệ
                            </Link>
                        </li>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")}>
                                Giảm giá
                            </Link>
                        </li>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")}>
                                Danh sách yêu thích
                            </Link>
                        </li>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")}>
                                Sản phẩm đặc biệt
                            </Link>
                        </li>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")}>
                                Chăm sóc khách hàng
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={2} className={cx("wrap")}>
                    <h6 className={cx("text-title")}>Thông tin</h6>
                    <ul className={cx("colorlib-footer-links")}>
                        <li className={cx("lib-items")}>
                            <Link to={"/about"} className={cx("link")}>
                                Về chúng tôi
                            </Link>
                        </li>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")}>
                                Thông tin nhà vận chuyển
                            </Link>
                        </li>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")}>
                                Quyền riêng tư
                            </Link>
                        </li>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")}>
                                Hỗ trợ
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={2} className={cx("wrap")}>
                    <h6 className={cx("text-title")}>Nổi bật</h6>
                    <ul className={cx("colorlib-footer-links")}>
                        <li className={cx("lib-items")}>
                            <Link to={"/coming-soon"} className={cx("link")} href="">
                                Sản phẩm mới
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={3} className={cx("wrap")}>
                    <h6 className={cx("text-title")}>Liên hệ</h6>
                    <div className={cx("contact")}>
                        <HomeIcon className={cx("icon")}></HomeIcon>
                        <p className={cx("contact-text")}>
                            Khu phố 6, Thủ Đức, Thành Phố Hồ Chí Minh
                        </p>
                    </div>

                    <div className={cx("contact")}>
                        <PhoneIcon className={cx("icon")}></PhoneIcon>
                        <p className={cx("contact-text")}>+ 01 234 567 88 </p>
                    </div>
                    <div className={cx("contact")}>
                        <MailIcon className={cx("icon")}></MailIcon>
                        <p className={cx("contact-text")}>hb@hbfashion.me </p>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
