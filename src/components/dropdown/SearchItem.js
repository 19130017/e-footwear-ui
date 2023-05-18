import { Box, Typography } from "@mui/material";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Dropdown.module.scss";
import { Grid } from "swiper";
const cx = classnames.bind(style);
function SearchItem() {
    return (
        <Grid container className={cx("wrapper")}>
            <Grid item>
                {/* <img
            src={item.thumbnailBefore}
            alt={item.name}
            className={cx("product-image")}
        /> */}
            </Grid>
            <Grid item sx={{ marginLeft: "0.5rem", flex: 1 }}>
                <Link to={"/"} className={cx("product-link")}>
                    <Typography variant="body1" className={cx("product-name")}>
                        {/* {item.name} */}
                        <Box component={"span"} className={cx("product-color")}>
                            {/* ({item.color}) */}
                        </Box>
                    </Typography>
                </Link>

                <Box className={cx("summary-price")}>
                    <Typography variant="body1" className={cx("sale-price")}>
                        {/* {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                }).format(item.salePrice)} */}
                    </Typography>
                    <Typography variant="body1" className={cx("pre-price")}>
                        {/* {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                }).format(item.preSalePrice)} */}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SearchItem;
