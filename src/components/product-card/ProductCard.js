import classNames from "classnames/bind";
import { Box, Grid, Typography } from "@mui/material";
import style from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function ProductCard(props) {
    const discount = Math.floor(
        ((props?.preSalePrice - props?.salePrice) / props?.preSalePrice) * 100
    );
    return (
        <Box className={cx("wrap-card")}>
            <Link to={props.link} className={cx("link")}>
                <Box className={cx("card")}>
                    <Box className={cx("wrap-image")}>
                        {discount && <Box className={cx("sale")}>Sale</Box>}
                        <Box className={cx("outer")}>
                            <img
                                className={cx("img")}
                                alt={props.name}
                                src={props.thumnailBefore}
                            />
                            <Box className={cx("inner")}>
                                <img
                                    className={cx("img")}
                                    src={props.thumnailAfter}
                                    alt={props.name}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={cx("content")}>
                    <Box className={cx("info")}>
                        <Typography className={cx("size")}>+{props.totalSize} size</Typography>
                        <Typography className={cx("color")}>+{props.totalColor} màu</Typography>
                    </Box>

                    <Box className={cx("title")}>{props.name}</Box>
                    <Grid container spacing={1} className={cx("price")}>
                        <Grid item className={cx("salePrice")}>
                            {Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(props.salePrice)}
                        </Grid>
                        <Grid item className={cx("preSalePrice")}>
                            {Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(props.preSalePrice)}
                        </Grid>
                        {discount && (
                            <Grid item xs={2} className={cx("discount")}>
                                -{discount}%
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Link>
        </Box>
    );
}
export default ProductCard;
