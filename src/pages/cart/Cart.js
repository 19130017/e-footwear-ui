import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import classnames from "classnames/bind";
import style from "./Cart.module.scss";
import Breadcrumb from "~/components/breadcrumbs";
import FooterGallery from "~/components/footer-gallery";
import CartProducts from "~/components/cart-products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItemToCart } from "~/redux/cart/cartSlice";
const cx = classnames.bind(style);

function Cart() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cartReducer.cart);
    const { isLogin, accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const breadcrumbs = [
        <Typography color="text.primary" className={cx("text")} key={1}>
            Giỏ hàng
        </Typography>,
    ];

    const removeItem = (index) => {
        dispatch(removeItemToCart(index));
    };
    const increaseQuantity = (item) => {
        dispatch(incrementQuantity(item));
    };
    const decreaseQuantity = (item) => {
        dispatch(decrementQuantity(item));
    };

    const total = cart?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    const cost = total + total * 0.1;

    const handleClick = () => {
        if (isLogin) navigate("/checkout");
        else navigate("/auth/sign-in");
    };

    return (
        <Box className={cx("cart")}>
            <Box className={cx("breadcrumb")}>
                <Box className="container">
                    <Breadcrumb data={breadcrumbs} />
                </Box>
            </Box>
            <Box className={cx("cart-container")}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid sm={8} item lg={6}>
                        <Box className={cx("cart-left")}>
                            <Typography variant="h5" className={cx("cart-title")}>
                                Giỏ hàng của bạn
                            </Typography>
                            <Divider sx={{ color: "#ccc" }} />
                            <Box className={cx("list-item")}>
                                <Typography variant="body1" className={cx("title-number")}>
                                    Bạn đang có <strong>{cart?.length} sản phẩm</strong> trong
                                    giỏ hàng
                                </Typography>

                                {cart?.length === 0 ? (
                                    <Button
                                        variant="outlined"
                                        className={cx("btn-continue")}
                                        onClick={() =>
                                            navigate("/collections/giay-bong-da-nam")
                                        }
                                    >
                                        Mua sắm sản phẩm
                                    </Button>
                                ) : (
                                    <Box className={cx("content")}>
                                        <CartProducts
                                            data={cart}
                                            removeParentCallback={removeItem}
                                            decreaseCallback={decreaseQuantity}
                                            increaseCallback={increaseQuantity}
                                        />
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={8} lg={4}>
                        <Box className={cx("cart-right")}>
                            <Box className={cx("order-summary-block")}>
                                <Typography variant="h5" className={cx("cart-title")}>
                                    Thanh toán
                                </Typography>
                                <Divider sx={{ color: "#ccc" }} />
                                <Box className={cx("checkout-summary")}>
                                    <Box className={cx("checkout-row")}>
                                        <Box component={"span"} className={cx("subtitle")}>
                                            Tổng tính tạm
                                        </Box>
                                        <Box
                                            component={"span"}
                                            className={cx("subtitle", "price")}
                                        >
                                            {total.toLocaleString("it-IT", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </Box>
                                    </Box>
                                    <Box className={cx("checkout-row")}>
                                        <Box component={"span"} className={cx("subtitle")}>
                                            Thành tiền
                                        </Box>
                                        <Box>
                                            <Box
                                                className={cx("subtitle", "price")}
                                                sx={{ color: "#da4343" }}
                                            >
                                                {cost.toLocaleString("it-IT", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </Box>
                                            <Box className={cx("text")}>(Đã bao gồm VAT)</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={{ color: "#ccc" }} />
                                <Box className={cx("cart-note")}>
                                    <Typography variant="body1">
                                        Phí vận chuyển sẽ được tính ở trang thanh toán.
                                    </Typography>
                                </Box>
                                {cart.length === 0 ? (
                                    <Button
                                        variant="contained"
                                        className={cx("btn-buy-now", "disabled")}
                                        disabled={true}
                                    >
                                        Tiếp tục
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleClick}
                                        variant="contained"
                                        className={cx("btn-buy-now")}
                                    >
                                        Tiếp tục
                                    </Button>
                                )}
                            </Box>

                            <Box className={cx("order-summary-notify")}>
                                <Box className={cx("text-vn")}>
                                    <Typography variant="body1" className={cx("text")}>
                                        Để nhận tư vấn hoặc hỗ trợ khi phát sinh khó khăn trong
                                        lúc mua hàng, hãy liên hệ Hb's thông qua:
                                    </Typography>
                                    <Typography variant="body1" className={cx("support")}>
                                        Gọi <strong>0966.158.666</strong> để được hỗ trợ
                                    </Typography>
                                    <Typography variant="body1" className={cx("support")}>
                                        Email tới địa chỉ
                                        <strong> cskh@bhfootwear.com</strong>
                                    </Typography>
                                </Box>
                                <Box className={cx("text-en")}>
                                    <Typography variant="body1" className={cx("text")}>
                                        For further support, please contact us via:
                                    </Typography>
                                    <Typography variant="body1" className={cx("support")}>
                                        Mobile phone: <strong>0966.158.666</strong> to
                                        supported.
                                    </Typography>
                                    <Typography variant="body1" className={cx("support")}>
                                        Email
                                        <strong> cskh@bhfootwear.com</strong>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* <FooterGallery /> */}
        </Box>
    );
}

export default Cart;
