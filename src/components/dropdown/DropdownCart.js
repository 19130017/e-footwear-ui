import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import classnames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import style from "./Dropdown.module.scss";
const cx = classnames.bind(style);
function DropdownCart({ data }) {
    const navigate = useNavigate();
    const total = data?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0);

    return (
        <Box className={cx("dropdown")}>
            <Typography variant="h5" className={cx("title")}>
                Giỏ hàng
            </Typography>
            {data?.length === 0 ? (
                <Box className={cx("cart-empty")}>Hiện chưa có sản phẩm</Box>
            ) : (
                <Box className={cx("content")}>
                    {data?.map((item, index) => (
                        <Grid key={index} container className={cx("wrapper")}>
                            <Grid item>
                                <img
                                    className={cx("image")}
                                    alt="test"
                                    src={`${item.detail.product.imageURL}`}
                                />
                            </Grid>
                            <Grid item sx={{ flex: 1, marginLeft: "0.5rem" }}>
                                <Link
                                    to={`/detail/${item.detail.product.slug}/${item.detail.product.color.id}`}
                                    className={cx("product-link")}
                                >
                                    <Typography variant="body1" className={cx("product-name")}>
                                        {item.detail.product.name}
                                    </Typography>
                                </Link>
                                <Typography variant="body1" className={cx("product-type")}>
                                    {item.detail.product.color.name} / {item.detail.size}
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="body1" className={cx("quantity")}>
                                        Số lượng: {item.quantity}
                                    </Typography>
                                    <Box className={cx("summary-price")}>
                                        <Typography variant="body1" className={cx("sale-price")}>
                                            {item.price.toLocaleString("it-IT", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </Typography>
                                        {item.detail.product.discountRate !== 0 && (
                                            <Typography variant="body1" className={cx("pre-price")}>
                                                {item.detail.product.originPrice.toLocaleString(
                                                    "it-IT",
                                                    {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }
                                                )}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            )}

            <Box className={cx("cart-summary")}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem 0",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "1.4rem", textTransform: "uppercase" }}
                    >
                        Tổng tiền
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "1.8rem", color: "red", fontWeight: "bold" }}
                    >
                        {total?.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </Typography>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/cart")}
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            width: "100%",
                            fontSize: "1.4rem",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#000",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Xem giỏ hàng
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default DropdownCart;
