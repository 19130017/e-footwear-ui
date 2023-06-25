import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsNew } from "~/redux/product/productSlice";
import { ProductSlide } from "../swiper";

function ProductNews() {
    const { isLoading, products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsNew());
    }, []);
    return !isLoading && <ProductSlide data={products} />;
}

export default ProductNews;
