import { Box } from "@mui/material";
import { ProductSlide } from "../swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsNew } from "~/redux/product/productSlice";
function ProductNews() {
    const { isLoading, products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsNew());
    }, []);
    return <Box className="container">{!isLoading && <ProductSlide data={products} />}</Box>;
}

export default ProductNews;
