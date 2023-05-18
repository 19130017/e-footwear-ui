import style from "./Search.module.scss";
import { Box, Grid, PaginationItem, Typography } from "@mui/material";
import classNames from "classnames/bind";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CardProduct from "~/components/card-product/CardProduct";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/Loading";
import { useEffect } from "react";
import { fetchProductsByName } from "~/redux/product/productSlice";
import Breadcrumb from "~/components/breadcrumbs/Breadcrumb";

const cx = classNames.bind(style);
function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const query = searchParams.get("query");
    useEffect(() => {
        dispatch(fetchProductsByName(query));
    }, [dispatch, query]);
    
    const data = [
        <span className={cx("text-link")} key={1}>
            Tìm kiếm
        </span>,
    ];
    return (
        <Box>
            <Box sx={{ marginTop: "2rem" }}>
                <Breadcrumb data={data} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px 40px",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <Typography variant="body2" className={cx("sub-title")} sx={{ fontSize: "1.7rem" }}>
                    Tìm kiếm được <span className={cx("search-item")}>{products?.length}</span> với{" "}
                    <span className={cx("search-item")}> {query}</span>
                </Typography>
            </Box>
            <Box sx={{ margin: "50px" }}>
                <Grid container spacing={2}>
                    {products?.length === 0 ? (
                        <Box>Không tìm thấy kết quả</Box>
                    ) : (
                        products.map((item, index) => (
                            <Grid key={index} item xs={3}>
                                <CardProduct data={item} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>
            {/* <Box className={cx("wrap-pagination")}>
                <Stack spacing={2}>
                    <Pagination
                        className={cx("pagination")}
                        color="primary"
                        count={10}
                        shape="rounded"
                        size="large"
                        renderItem={(item) => (
                            <PaginationItem sx={{ fontSize: "13px" }} {...item} />
                        )}
                    />
                </Stack>
            </Box> */}
            <Loading open={isLoading} />
        </Box>
    );
}
export default Search;
