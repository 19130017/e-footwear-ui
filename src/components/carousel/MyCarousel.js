import { Card } from "@mui/material";
import { Box, Grid } from "@mui/system";
import classNames from "classnames/bind";
import Slider from "react-slick";
import style from "./MyCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataCarouselExample } from "../../assets/dataCarousel/dataCarouselExample";

const cx = classNames.bind(style);

function MyCarousel({}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Box className={cx("main")}>
      <Slider {...settings}>
        {dataCarouselExample.map((item) => (
          <Box className={cx("card")}>
            <img className={cx("picture")} src={item.linkImage}></img>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default MyCarousel;
