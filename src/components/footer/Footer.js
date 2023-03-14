import { Box, Grid } from "@mui/material";
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
const cx = classNames.bind(style);

function Footer() {
  return (
    <Box className={cx("footer")}>
      <Grid container className={cx("container")}>
        <Grid item xs={3} className={cx("wrap")}>
          <h6 className={cx("text-title")}>Về HB</h6>
          <p className={cx("introduce")}>
            Chúng tôi luôn lắng nghe luôn thấu hiểu và luôn cải thiện để đem đến
            trải nghiệm tốt nhất cho khách hàng.
          </p>
        </Grid>
        <Grid item xs={2} className={cx("wrap")}>
          <h6 className={cx("text-title")}>Dịch vụ khách hàng</h6>
          <ul className={cx("colorlib-footer-links")}>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Liên hệ
              </a>
            </li>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Giảm giá
              </a>
            </li>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Danh sách yêu thích
              </a>
            </li>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Sản phẩm đặc biệt
              </a>
            </li>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Chăm sóc khách hàng
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={2} className={cx("wrap")}>
          <h6 className={cx("text-title")}>Thông tin</h6>
          <ul className={cx("colorlib-footer-links")}>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Về chúng tôi
              </a>
            </li>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Thông tin nhà vận chuyển
              </a>
            </li>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Quyền riêng tư
              </a>
            </li>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="#">
                Hỗ trợ
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={2} className={cx("wrap")}>
          <h6 className={cx("text-title")}>Nổi bật</h6>
          <ul className={cx("colorlib-footer-links")}>
            <li className={cx("lib-items")}>
              <a className={cx("link")} href="">
                Sản phẩm mới
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={3} className={cx("wrap")}>
          <h6 className={cx("text-title")}>Liên hệ</h6>
          <div className={cx("contact")}>
            <HomeIcon className={cx("icon")}></HomeIcon>
            <p className={cx("contact-text")}>Khu phố 6, Thủ Đức, Thành Phố Hồ Chí Minh</p>
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
