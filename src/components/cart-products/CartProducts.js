import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import { ColorRounded } from "../color";
import CloseIcon from "@mui/icons-material/Close";
import style from "./CartProducts.module.scss";
const cx = classnames.bind(style);
function CartProduct({ item }) {
    return (
        <Box className={cx("product-item")}>
            <Box className={cx("btn-remove")}>
                <CloseIcon sx={{ height: "3rem", width: "3rem" }} />
            </Box>
            <Box className={cx("product-image")}>
                <img src={item.thumbnailBefore} alt={item.name} />
            </Box>
            <Box className={cx("product-info")}>
                <Typography variant="h5" className={cx("product-text")}>
                    <Link to={item.link} className={cx("product-link")}>
                        {item.name} {item.name}
                    </Link>
                </Typography>
                <Grid
                    container
                    spacing={1}
                    sx={{ marginTop: "1rem" }}
                    className={cx("bottom-info")}
                >
                    <Grid item xs={2} className={cx("item")}>
                        {Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(item.salePrice)}
                    </Grid>
                    <Grid item xs={2} className={cx("item")}>
                        <Box>
                            Màu sắc: <ColorRounded nameColor={item.color} />
                        </Box>
                    </Grid>
                    <Grid item xs={3} className={cx("item")}>
                        <Typography variant="body1">Kích thước: {item.size}</Typography>
                    </Grid>
                    <Grid item xs={2} className={cx("item")}>
                        <Box className={cx("btn-number")}>
                            <Box>
                                <Box component={"span"}>-</Box>
                            </Box>
                            <Box component={"input"} readOnly value={1}></Box>
                            <Box>
                                <Box component={"span"}>+</Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3} className={cx("item", "price")}>
                        <Box>
                            <Typography variant="body1" className={cx("current-price")}>
                                {Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(item.salePrice)}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" className={cx("pre-price")}>
                                {Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(item.preSalePrice)}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

function CartProducts({ data }) {
    return (
        <Box className={cx("product-list")}>
            {data.map((item, index) => (
                <CartProduct key={index} item={item} />
            ))}
        </Box>
    );
}

export default CartProducts;
