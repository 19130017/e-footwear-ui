import { Box } from "@mui/material";
import SlickProduct from "../slick/SlickProduct";
import { productCardData } from "~/service/fakeData";
import { Typography } from "@mui/material";
import classNames from "classnames/bind";
import style from "./ProductCategory.module.scss";

const cx = classNames.bind(style);


function ProductCategory() {
    return (
        <Box className={cx("container")}>
            <Typography className={cx("title-category")}>Sản phẩm mới</Typography>
            <SlickProduct data={productCardData} />
        </Box>
    );
}

export default ProductCategory;