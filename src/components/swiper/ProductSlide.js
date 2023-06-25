import { Swiper, SwiperSlide } from "swiper/react";
import CardProduct from "../card-product/CardProduct";
import { useEffect, useState } from "react";

function ProductSlide({ data }) {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    useEffect(() => {
        setCurrentWidth(window.innerWidth);

        window.addEventListener("resize", _ => {
            setCurrentWidth(window.innerWidth);
        });

        return () => {
            window.removeEventListener("resize", _ => {});
        };
    }, []);


    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={currentWidth > 960 ? 4 : 2}
            className={"pb-4"}
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
