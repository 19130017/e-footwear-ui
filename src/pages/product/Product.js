import style from "./Product.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import classNames from "classnames/bind";
import FilterProduct from "~/components/filter/FilterProduct";
import ProductCard from "~/components/product-card/ProductCard";

const cx = classNames.bind(style);
function Product() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Typography
          variant="body2"
          className={cx("sub-title")}
          sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Sản phẩm
        </Typography>
        <FilterProduct></FilterProduct>
      </Box>
      <Box sx={{margin: "50px"}}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={3}>
            <ProductCard></ProductCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Product;
