import classNames from "classnames/bind";
import { Box, Grid, Typography } from "@mui/material";
import style from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function ProductCard({ product }) {
    return (
        <Box className={cx("wrap-card")}>
            <Link to={`/product/${product?.slug}`} className={cx("link")}>
                <Box className={cx("card")}>
                    <Box className={cx("wrap-image")}>
                        {product?.discountRate !== 0 && <Box className={cx("sale")}>Sale</Box>}
                        {product?.images.map((image, i) => {
                            if (i === 0) {
                                return (
                                    <img
                                        key={i}
                                        className={cx("img", "inner")}
                                        alt={product?.name}
                                        src={`//${image.imageURL}`}
                                    />
                                );
                            } else if (i === 1) {
                                return (
                                    <img
                                        key={i}
                                        className={cx("img", "outer")}
                                        src={`//${image.imageURL}`}
                                        alt={product?.name}
                                    />
                                );
                            }
                        })}
                    </Box>
                </Box>
                <Box className={cx("content")}>
                    <Box className={cx("info")}>
                        <Typography className={cx("size")}>
                            + {product?.sizeCounter} size
                        </Typography>
                        <Typography className={cx("color")}>
                            + {product?.colorCounter} màu
                        </Typography>
                    </Box>

                    <Box className={cx("title")}>{product?.name}</Box>
                    <Grid container spacing={1} className={cx("price")}>
                        <Grid item className={cx("discount-price")}>
                            {product?.discountPrice.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Grid>
                        {product?.discountRate !== 0 && (
                            <>
                                <Grid item className={cx("origin-price")}>
                                    {product?.originPrice.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Grid>
                                <Grid item xs={2} className={cx("discount")}>
                                    -{product?.discountRate}%
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
            </Link>
        </Box>
    );
}
export default ProductCard;
