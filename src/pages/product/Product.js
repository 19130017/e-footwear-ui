import style from "./Product.module.scss";
import { Box, Grid, PaginationItem, Typography } from "@mui/material";
import classNames from "classnames/bind";
import FilterProduct from "~/components/filter/FilterProduct";
import ProductCard from "~/components/product-card/ProductCard";
import { productCardData, brands, sizes, colors } from "~/service/fakeData";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
        <FilterProduct data={brands} label={"Thương hiệu"} />
        <FilterProduct data={colors} label={"Màu sắc"} />
        <FilterProduct data={sizes} label={"Size"} />
      </Box>
      <Box sx={{ margin: "50px" }}>
        <Grid container spacing={2}>
          {productCardData.map((item, index) => (
            <Grid key={index} item xs={3}>
              <ProductCard link={item.link}
                name={item.name}
                thumnailBefore={item.thumnailBefore}
                thumnailAfter={item.thumnailAfter}
                totalSize={item.totalSize}
                totalColor={item.totalColor}
                salePrice={item.salePrice}
                preSalePrice={item.preSalePrice} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={cx("wrap-pagination")}>
        <Stack spacing={2}>
          <Pagination className={cx("pagination")} color="primary" count={10} shape="rounded" size="large" renderItem={(item) => (
            <PaginationItem sx={{ fontSize: "13px" }}
              {...item}
            />
          )} />
        </Stack>
      </Box>
    </Box>
  );
}
export default Product;
