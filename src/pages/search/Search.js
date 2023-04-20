import style from "./Search.module.scss";
import { Box, Grid, PaginationItem, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { productCardData } from "~/service/fakeData";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CardProduct from "~/components/card-product/CardProduct";

const cx = classNames.bind(style);
function Search() {
    const searchItem = "Bitis Hunter";
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
                    sx={{ fontSize: "1.7rem", }}
                >
                    Kết quả tìm kiếm cho <span className={cx("search-item")}>"{searchItem}"</span>
                </Typography>
            </Box>
            <Box sx={{ margin: "50px" }}>
                <Grid container spacing={2}>
                    {productCardData.map((item, index) => (
                        <Grid key={index} item xs={3}>
                            <CardProduct data={item}/>
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
export default Search;
