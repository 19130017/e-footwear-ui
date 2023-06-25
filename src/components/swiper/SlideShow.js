import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { fetchGetCarousels } from "~/redux/gallery/gallerySlice";

function SlideShow() {
    const { isLoading, carousel } = useSelector((state) => state.galleryReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetCarousels());
    }, []);
    return (
        <>
            {!isLoading && (
                <Swiper
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    modules={[Pagination, Autoplay, EffectFade]}
                    effect={"fade"}
                    className={"h-fit w-full mb-8"}
                >
                    {carousel?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={item.link}>
                                <img src={item.imageURL} alt="" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
}
export default SlideShow;
