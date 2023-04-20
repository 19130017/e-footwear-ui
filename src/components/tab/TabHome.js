import { useEffect, useState } from "react";
import style from "./Tab.module.scss";
import classnames from "classnames/bind";
import { Box } from "@mui/material";
import { ProductHot, ProductNews } from "../product-home";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "~/redux/product/productSlice";

const cx = classnames.bind(style);
function TabHome() {
    const [value, setValue] = useState(1);
    const products = useSelector((state) => state.productReducer.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const productsNews = products
        ?.slice()
        .sort((a, b) => {
            return a.createAt > b.createAt ? -1 : 1;
        })
        .slice(0, 15);

    return (
        <Box className={cx("tab-home")}>
            <Box component={"ul"} className={cx("tabs")}>
                <Box
                    component={"li"}
                    className={cx("tab", value === 1 ? "active" : "")}
                    onClick={() => setValue(1)}
                >
                    Sản phẩm mới
                </Box>
                <Box
                    component={"li"}
                    className={cx("tab", value === 2 ? "active" : "")}
                    onClick={() => setValue(2)}
                >
                    Sản phẩm bán chạy
                </Box>
            </Box>
            {value === 1 ? <ProductNews data={productsNews} /> : <ProductHot data={productsNews} />}
        </Box>
    );
}

export default TabHome;
