import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";

import classnames from "classnames/bind";
import style from "./Swiper.module.scss";
import { slideData } from "~/service/fakeData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetCarousels } from "~/redux/gallery/gallerySlice";
import { Box } from "@mui/material";

const cx = classnames.bind(style);
function SlideShow() {
    const { isLoading, carousel } = useSelector((state) => state.galleryReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetCarousels());
    }, []);
    return (
        <Box>
            {!isLoading && (
                <Swiper
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    modules={[Pagination, Autoplay, EffectFade]}
                    effect={"fade"}
                    className={cx("my-carousel")}
                >
                    {carousel?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={item.link}>
                                <img src={item.imageURL} alt="" style={{ height: "100%" }} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </Box>
    );
}
export default SlideShow;
