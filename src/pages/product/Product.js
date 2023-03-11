import style from "./Product.module.scss";
import { Box, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { Filter } from "@mui/icons-material";
import FilterProduct from "~/components/filter/FilterProduct";

const cx = classNames.bind(style);
function Product() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", padding: "20px 40px" , border:"1px solid #ccc"}}>
        <Typography
          variant="body2"
          className={cx("sub-title")}
          sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Sản phẩm
        </Typography>
        <FilterProduct></FilterProduct>
      </Box>
    

    </Box>
  );
}
export default Product;
