import { Card } from "@mui/material";
import { Box, Grid } from "@mui/system";
import classNames from "classnames/bind";
import Slider from "react-slick";
import style from "./MyCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(style);

function MyCarousel({}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box className={cx("main")}>
      <Slider {...settings}>
        <Box className={cx("card")}>
          <img
            className={cx("picture")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1800,quality=90,format=auto/uploads/February2023/sBanner-Running2.png"
          ></img>
        </Box>
        <Box className={cx("card")}>
          <img
            className={cx("picture")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1800,quality=90,format=auto/uploads/February2023/Banner-Combo.png"
          ></img>
        </Box>
        <Box className={cx("card")}>
          <img
            className={cx("picture")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1800,quality=90,format=auto/uploads/February2023/sBanner-Running2.png"
          ></img>
        </Box>
        <Box className={cx("card")}>
          <img
            className={cx("picture")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1800,quality=90,format=auto/uploads/February2023/Banner-Combo.png"
          ></img>
        </Box>
        <Box className={cx("card")}>
          <img
            className={cx("picture")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1800,quality=90,format=auto/uploads/February2023/sBanner-Running2.png"
          ></img>
        </Box>
      </Slider>
    </Box>
  );
}

export default MyCarousel;
