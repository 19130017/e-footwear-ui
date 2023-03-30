import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import classnames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import style from "./Dropdown.module.scss";
const cx = classnames.bind(style);

function DropdownCart() {
    const navigate = useNavigate();
    return (
        <Box className={cx("dropdown")}>
            <Typography variant="h5" className={cx("title")}>
                Giỏ hàng
            </Typography>

            <Box className={cx("content")}>
                {[1, 2, 3].map((item, index) => (
                    <Grid
                        key={index}
                        container
                      className={cx('wrapper')}
                    >
                        <Grid item>
                            <img
                                className={cx("image")}
                                alt="test"
                                src="https://product.hstatic.net/1000230642/product/dsmh11100xdg__2__41ce09f903184a9b928a5493e00241ec_small.jpg"
                            />
                        </Grid>
                        <Grid item sx={{ flex: 1, marginLeft: "0.5rem" }}>
                            <Link to={"detail/213"} className={cx("product-link")}>
                                <Typography variant="body1" className={cx("product-name")}>
                                    Giày Bóng Đá Nam Hunter Football Futsal DSMH11100XDG (Xanh
                                    Dương)
                                </Typography>
                            </Link>
                            <Typography variant="body1" className={cx("product-type")}>
                                Xanh dương / 44
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="body1" className={cx("quantity")}>
                                    Số lượng: 1
                                </Typography>
                                <Box className={cx("summary-price")}>
                                    <Typography variant="body1" className={cx("sale-price")}>
                                        {Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(2132131)}
                                    </Typography>
                                    <Typography variant="body1" className={cx("pre-price")}>
                                        {Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(2132131)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>
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
                        {Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(2132131)}
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
