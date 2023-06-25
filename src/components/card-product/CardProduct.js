import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import style from "./CardProduct.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classnames.bind(style);
function CardProduct({ data }) {
    return (
        <Card className={cx("card")}>
            <CardActionArea
                component={Link}
                to={`/detail/${data?.slug}/${data?.color.id}`}
                className={cx("card-area")}
            >
                {data?.discountRate !== 0 && (
                    <Box className={cx("sale-text")}>-{data?.discountRate}%</Box>
                )}

                <Box className={cx("main-image")}>
                    <CardMedia
                        component="img"
                        image={`${data?.images[0].imageURL}`}
                        alt="green iguana"
                    />
                </Box>
                <Box className={cx("sub-image")}>
                    <CardMedia
                        component="img"
                        image={`${data?.images[1].imageURL}`}
                        alt="green iguana"
                    />
                </Box>

                <CardContent className={cx("card-content")}>
                    <Box className={cx("info")}>
                        <Typography className={cx("size")}>+ {data?.sizeCounter} size</Typography>
                        <Typography className={cx("color")}>+ {data?.colorCounter} màu</Typography>
                    </Box>
                    <Box className={cx("title")}>{data?.name}</Box>
                    <Grid
                        container
                        spacing={1}
                        className={cx("price", " justify-end items-center h-[60px] md:h-[30px]")}
                    >
                        {data?.discountRate !== 0 && (
                            <>
                                <Grid item className={cx("origin-price text-3xl hidden sm:block")}>
                                    {data?.originPrice.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Grid>
                                {/*<Grid item xs={2} className={cx("discount")}>*/}
                                {/*    -{data?.discountRate}%*/}
                                {/*</Grid>*/}
                            </>
                        )}
                        <Grid item className={cx("discount-price text-3xl text-danger")}>
                            {data?.discountPrice.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardProduct;
