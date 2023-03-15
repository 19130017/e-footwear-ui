import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import style from "./RecentView.module.scss";
import { dataRecentView } from "~/assets/dataRecentView/dataRecentView";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
export default class RecentView extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            arrows: false,
            dot: false,
        };
        return (
            <Box className={cx("main")}>
                <Slider {...settings}>
                    {dataRecentView.map((item) => (
                        <Box className={cx("wrap-card")}>
                            <Link to="/productDetail" className={cx("link")}>
                                 <Box className={cx("card")}>
                                    <Box className={cx("wrap-image")}>
                                        <Box className={cx("sale")}>Sale</Box>
                                        <Box className={cx("outer")}>
                                            <img
                                                className={cx("img")}
                                                src={item.linkImageFront}
                                            ></img>
                                            <Box className={cx("inner")}>
                                                <img
                                                    className={cx("img")}
                                                    src={item.linkImageBack}
                                                ></img>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                                <Box className={cx("content")}>
                                    <Box className={cx("info")}>
                                        <Typography className={cx("size")}>{item.size}</Typography>
                                        <Typography className={cx("color")}>{item.color}</Typography>
                                    </Box>

                                    <Box className={cx("title")}>
                                        {item.title}
                                    </Box>
                                    <Box className={cx("price")}>
                                        <Box className={cx("salePrice")}>{item.salePrice}</Box>
                                        <Box className={cx("preSalePrice")}>{item.preSalePrice}</Box>
                                        <Box className={cx("discount")}>{item.discount}</Box>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    ))}

                </Slider>

            </Box>
        );
    }
}