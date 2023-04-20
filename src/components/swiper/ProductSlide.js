import { Swiper, SwiperSlide } from "swiper/react";
import CardProduct from "../card-product/CardProduct";
import "swiper/css";
import style from "./Swiper.module.scss"
import classnames from "classnames/bind";
const cx = classnames.bind(style);

function ProductSlide({ data }) {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            style={{paddingBottom:'1rem'}}
        >
            {data?.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <CardProduct data={item} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default ProductSlide;
