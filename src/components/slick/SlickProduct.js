import { Box } from "@mui/material";
import Slider from "react-slick";
import ProductCard from "../product-card/ProductCard";
import { NextArrowProduct, PrevArrowProduct } from "./CustomSlick";
import "./_Custom.scss";
function SlickProduct({ data }) {
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <PrevArrowProduct to="prev-arrow" />,
        nextArrow: <NextArrowProduct to="next-arrow" />,
    };
    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <Box sx={{ padding: "0 1rem" }} key={index}>
                    <ProductCard
                        link={item.link}
                        name={item.name}
                        thumnailBefore={item.thumnailBefore}
                        thumnailAfter={item.thumnailAfter}
                        totalSize={item.totalSize}
                        totalColor={item.totalColor}
                        salePrice={item.salePrice}
                        preSalePrice={item.preSalePrice}
                    />
                </Box>
            ))}
        </Slider>
    );
}

export default SlickProduct;
