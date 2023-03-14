import React, { Component } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import classNames from "classnames/bind";
import style from "./MySlider.module.scss";
import { dataSliderExample } from "~/assets/dataSlider/dataSlider";
const cx = classNames.bind(style);
export default class MySlider extends Component {
    render() {
        const settings = {
            // customPaging: function () {
            //     return (
            //         <Box>
            //             {dataSliderExample.map((item) => (
            //                 <a>
            //                     <img className={cx("pictureMini")} src={item.linkImage} />
            //                 </a>
            //             ))}

            //         </Box>

            //     );
            // },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade:true
        };
        return (

            <Box className={cx("main")} >
                <Slider {...settings}>
                    {dataSliderExample.map((item) => (
                        <Box className={cx("card")}>
                            <img className={cx("picture")} src={item.linkImage} />
                        </Box>
                    ))}
                </Slider>
            </Box>
        );
    }
}