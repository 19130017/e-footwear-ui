import { afterSaleData } from "~/service/fakeData";
import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import classnames from "classnames/bind";
import style from "./Swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
const cx = classnames.bind(style);

function AfterSale() {
    return (
        <Box component={"section"} className={"section py-8"}>
            <Box className={"container mx-auto"}>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                >
                    {afterSaleData?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box key={index} className={cx("after-sale-content")}>
                                <Typography variant="body1" className={cx("after-sale-text")}>
                                    <strong>{item.title} </strong>
                                    {item.text}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                    {/* <div className="swiper-pagination"></div> */}
                </Swiper>
            </Box>
        </Box>
    );
}

export default AfterSale;
