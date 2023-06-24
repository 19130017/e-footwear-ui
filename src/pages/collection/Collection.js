import "./Collection.scss";
import { Box, Grid, PaginationItem, Typography } from "@mui/material";
import FilterProduct from "~/components/filter/FilterProduct";
import { sizes, colors, orderBy } from "~/service/fakeData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllProductByCateSlug } from "~/redux/product/productSlice";
import FooterGallery from "~/components/footer-gallery/FooterGallery";
import Breadcrumb from "~/components/breadcrumbs/Breadcrumb";
import { fetchCategoryBySlug } from "~/redux/category/categorySlice";
import CardProduct from "~/components/card-product/CardProduct";

function Collection() {
    const products = useSelector((state) => state.productReducer.products);
    const { isLoading, category } = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();
    const slug = useParams();

    const breadCrumbData = [
        <span className="text-link-collection" key={1}>
            Danh mục
        </span>,
        <Link to={`/collection/${category?.slug}`} className="text-link-collection" key={2}>
            {category?.name} {category?.category?.name}
        </Link>,
    ];

    useEffect(() => {
        dispatch(fetchAllProductByCateSlug(slug));
        dispatch(fetchCategoryBySlug(slug));
    }, [slug]);

    return (
        <Box>
            <Breadcrumb data={breadCrumbData} />
            <Box>
                <img
                    src={category?.gallery?.imageURL}
                    alt={category?.name}
                    className="image-category"
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px 40px",
                    borderBottom: "1px solid #ccc",
                    justifyContent: "space-between",
                }}
            >
                {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                        variant="body2"
                        className="sub-title"
                        sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
                    >
                        Sản phẩm
                    </Typography>
                    <FilterProduct data={colors} label={"Màu sắc"} />
                    <FilterProduct data={sizes} label={"Size"} />
                </Box>

                <Box sx={{ alignSelf: "flex-end" }}>
                    <FilterProduct data={orderBy} label={"Sắp xếp theo"} />
                </Box> */}
            </Box>

            <Box sx={{ margin: "50px" }}>
                <Grid container spacing={2}>
                    {products &&
                        products.map((item, index) => (
                            <Grid key={index} item md={3} sm={6}>
                                <CardProduct data={item} />
                            </Grid>
                        ))}
                </Grid>
            </Box>
            {products.length > 10 && (
                <Box className="wrap-pagination">
                    <Stack spacing={2}>
                        <Pagination
                            className="pagination"
                            color="primary"
                            count={2}
                            shape="rounded"
                            size="large"
                            renderItem={(item, index) => (
                                <PaginationItem sx={{ fontSize: "13px" }} {...item} />
                            )}
                        />
                    </Stack>
                </Box>
            )}

            <FooterGallery />
        </Box>
    );
}
export default Collection;
