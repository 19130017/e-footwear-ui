import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { afterSaleData } from "~/service/fakeData";

import style from "./Slick.module.scss";
import classnames from "classnames/bind";
import { NextArrowAfterSale, PrevArrowAfterSale } from "./CustomSlick";
const cx = classnames.bind(style);

function AfterSaleSlider() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrowAfterSale to="next" />,
        prevArrow: <PrevArrowAfterSale to="prev" />,
    };
    return (
        <Slider {...settings}>
            {afterSaleData.map((item, index) => {
                return (
                    <Box key={index} className={cx("after-sale-content")}>
                        <Typography variant="body1" className={cx("after-sale-text")}>
                            <strong>{item.title} </strong>
                            {item.text}
                        </Typography>
                    </Box>
                );
            })}
        </Slider>
    );
}

export default AfterSaleSlider;
