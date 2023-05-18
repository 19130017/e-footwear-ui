import { Box, Grid, Typography } from "@mui/material";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Dropdown.module.scss";
const cx = classnames.bind(style);

function DropdownSearch({ data, value }) {
    return (
        <Box className={cx("dropdown")}>
            {data ? (
                <Box>
                    <Box className={cx("content")}>
                        {data.map((item, index) => {
                            if (index < 4) {
                                return (
                                    <Grid key={index} container className={cx("wrapper")}>
                                        <Grid item>
                                            <img
                                                src={item.thumbnailBefore}
                                                alt={item.name}
                                                className={cx("product-image")}
                                            />
                                        </Grid>
                                        <Grid item sx={{ marginLeft: "0.5rem", flex: 1 }}>
                                            <Link to={item.link} className={cx('product-link')}>
                                                <Typography
                                                    variant="body1"
                                                    className={cx("product-name")}
                                                >
                                                    {item.name}
                                                    <Box
                                                        component={"span"}
                                                        className={cx("product-color")}
                                                    >
                                                        ({item.color})
                                                    </Box>
                                                </Typography>
                                            </Link>

                                            <Box className={cx("summary-price")}>
                                                <Typography
                                                    variant="body1"
                                                    className={cx("sale-price")}
                                                >
                                                    {Intl.NumberFormat("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }).format(item.salePrice)}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    className={cx("pre-price")}
                                                >
                                                    {Intl.NumberFormat("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }).format(item.preSalePrice)}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                );
                            }
                        })}
                    </Box>
                    <Link to={`/search/${value}`} variant="body1" className={cx("search-page")}>
                        Xem thêm {data?.length} sản phẩm
                    </Link>
                </Box>
            ) : (
                "Vui lòng nhập từ khoá để tìm kiếm"
            )}
        </Box>
    );
}

export default DropdownSearch;
