import { Box } from "@mui/material";
import { ProductSlide } from "../swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsHot } from "~/redux/product/productSlice";

function ProductHot() {
    const { isLoading, products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsHot());
    }, []);
    return <Box className="container">{!isLoading && <ProductSlide data={products} />}</Box>;
}
export default ProductHot;
