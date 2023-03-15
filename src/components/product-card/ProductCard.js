import classNames from "classnames/bind";
import { Box, Typography } from "@mui/material";
import style from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function ProductCard() {
  return (
    <Box className={cx("wrap-card")}>
      <Link to="/productDetail" className={cx("link")}>
        <Box className={cx("card")}>
          <Box className={cx("wrap-image")}>
            <Box className={cx("sale")}>Sale</Box>
            <Box className={cx("outer")}>
              <img
                className={cx("img")}
                src="https://product.hstatic.net/1000230642/product/hsm001200den__2__5b334f3afd484a40bec4abe17b476c8f_grande.jpg"
              ></img>
              <Box className={cx("inner")}>
                <img
                  className={cx("img")}
                  src="https://product.hstatic.net/1000230642/product/hsm001200den__10__86abade27eac4056a9713976efd7d034_grande.jpg"
                ></img>
              </Box>
            </Box>
          </Box>

        </Box>
        <Box className={cx("content")}>
          <Box className={cx("info")}>
            <Typography className={cx("size")}>+5 size</Typography>
            <Typography className={cx("color")}>+2 màu</Typography>
          </Box>

          <Box className={cx("title")}>
            Giày Thể Thao Nam Hunter X - Dune OTP Real Black edition HSM00120N
          </Box>
          <Box className={cx("price")}>
            <Box className={cx("salePrice")}>1,329,000 đ</Box>
            <Box className={cx("preSalePrice")}>1,500,000đ</Box>
            <Box className={cx("discount")}>-11%</Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
export default ProductCard;
