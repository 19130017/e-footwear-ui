import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "~/components/breadcrumbs/Breadcrumb";
import CardProduct from "~/components/card-product/CardProduct";
import Loading from "~/components/loading/Loading";
import { fetchProductsByName } from "~/redux/product/productSlice";
import "./Search.scss";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const query = searchParams.get("query");
    useEffect(() => {
        dispatch(fetchProductsByName(query));
    }, [dispatch, query]);
    
    const data = [
        <span className="text-breakcumbs" key={1}>
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
                <Typography variant="body2" className="sub-title" sx={{ fontSize: "1.7rem" }}>
                    Tìm kiếm được <span className="search-item font-bold ">{products?.length}</span> với{" "}
                    <span className="search-item font-bold"> {query}</span>
                </Typography>
            </Box>
            <Box className="container mx-auto my-[50px]">
                <Grid container spacing={2}>
                    {products?.length === 0 ? (
                        <Box>Không tìm thấy kết quả</Box>
                    ) : (
                        products.map((item, index) => (
                            <Grid key={index} item md={3} sm={6}>
                                <CardProduct data={item} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>
            {/* <Box className="wrap-pagination flex justify-center my-[20px] ")}>
                <Stack spacing={2}>
                    <Pagination
                        className="pagination")}
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
