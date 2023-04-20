import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import classnames from "classnames/bind";
import style from "./Swiper.module.scss";
const cx = classnames.bind(style);

function DetailSlide({ data }) {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}            
        >
            {data?.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Box className={cx("card")} key={index}>
                            <img className={cx("picture")} src={`${item.imageURL}`} alt={"test"} />
                        </Box>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default DetailSlide;
