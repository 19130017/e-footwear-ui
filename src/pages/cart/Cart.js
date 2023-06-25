import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import "./Cart.scss";
import Breadcrumb from "~/components/breadcrumbs";
import FooterGallery from "~/components/footer-gallery";
import CartProducts from "~/components/cart-products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItemToCart } from "~/redux/cart/cartSlice";

function Cart() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cartReducer.cart);
    const { isLogin, accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const breadcrumbs = [
        <Typography className="text text-[1.3rem] text-black " key={1}>
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
        <Box className="cart bg-cart-theme">
            <Box className="breadcrumb container py-[1rem]">
                <Box >
                    <Breadcrumb data={breadcrumbs} />
                </Box>
            </Box>
            <Box className="cart-container mt-[1rem] bg-cart-theme pb-[2rem]">
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10} lg={8} xl={6} >
                        <Box className="cart-left pt-[2rem] pr-[1.5rem] pb-[1rem] pl-[1.5rem]  bg-white mt-[3rem] rounded-[0.7rem]">
                            <Typography variant="h5" className="cart-title text-[2rem] uppercase text-black font-bold py-[1rem]">
                                Giỏ hàng của bạn
                            </Typography>
                            <Divider sx={{ color: "#ccc" }} />
                            <Box className="list-item list-none py-[1.5rem] ">
                                <Typography variant="body1" className="title-number text-[1.4rem] mb-[1.5rem] ">
                                    Bạn đang có <strong>{cart?.length} sản phẩm</strong> trong
                                    giỏ hàng
                                </Typography>

                                {cart?.length === 0 ? (
                                    <Button
                                        variant="outlined"
                                        className="btn-continue text-[2rem] outline-none "
                                        onClick={() =>
                                            navigate("/collections/giay-bong-da-nam")
                                        }
                                    >
                                        Mua sắm sản phẩm
                                    </Button>
                                ) : (
                                    <Box className="content border-[1px] border-gray rounded-[0.8rem] py-[0.8rem] px-[1rem]">
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
                    <Grid item xs={10} lg={3} xl={3}>
                        <Box className="cart-right bg-cart-theme rounded-[0.7rem] mt-[3rem] sticky top-[90px] mb-[1.5rem]">
                            <Box className="order-summary-block bg-white p-[1.5rem] rounded-[1,5rem] ">
                                <Typography variant="h5" className="cart-title text-[2rem] uppercase text-black font-bold py-[1rem]">
                                    Thanh toán
                                </Typography>
                                <Divider sx={{ color: "#ccc" }} />
                                <Box className="checkout-summary mt-[1.5rem] ">
                                    <Box className="checkout-row flex justify-between">
                                        <Box component={"span"} className="subtitle text-[1.4rem] leading-[2.4rem] ">
                                            Tổng tính tạm
                                        </Box>
                                        <Box
                                            component={"span"}
                                            className="subtitle font-bold text-[1.4rem] leading-[2.4rem] text-right" //price
                                        >
                                            {total.toLocaleString("it-IT", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </Box>
                                    </Box>
                                    <Box className="checkout-row flex justify-between">
                                        <Box component={"span"} className="subtitle text-[1.4rem] leading-[2.4rem] ">
                                            Thành tiền
                                        </Box>
                                        <Box>
                                            <Box
                                                className="subtitle font-bold text-price-sale text-[1.4rem] leading-[2.4rem] text-right"
                                            >
                                                {cost.toLocaleString("it-IT", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </Box>
                                            <Box className="text text-[1.2rem] text-vat-color ">(Đã bao gồm VAT)</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={{ color: "#ccc" }} />
                                <Box className="cart-note pt-[0.5rem] mt-[2rem]">
                                    <Typography variant="body1">
                                        Phí vận chuyển sẽ được tính ở trang thanh toán.
                                    </Typography>
                                </Box>
                                {cart.length === 0 ? (
                                    <Button
                                        variant="contained"
                                        className="btn-buy-now disabled" //disabled
                                        disabled={true}
                                    >
                                        Tiếp tục
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleClick}
                                        variant="contained"
                                        className="btn-buy-now"
                                    >
                                        Tiếp tục
                                    </Button>
                                )}
                            </Box>

                            <Box className="order-summary-notify bg-order bg-order-notify mt-[3rem] py-[1.2rem] px-[1.5rem] rounded-[0.8rem]  ">
                                <Box className="text-vn ">
                                    <Typography variant="body1" className="text mt-[1rem] text-[1.3rem] leading-[2.2rem]">
                                        Để nhận tư vấn hoặc hỗ trợ khi phát sinh khó khăn trong
                                        lúc mua hàng, hãy liên hệ Hb's thông qua:
                                    </Typography>
                                    <Typography variant="body1" className="support">
                                        Gọi <strong>0966.158.666</strong> để được hỗ trợ
                                    </Typography>
                                    <Typography variant="body1" className="support">
                                        Email tới địa chỉ
                                        <strong> cskh@bhfootwear.com</strong>
                                    </Typography>
                                </Box>
                                <Box className="text-en ">
                                    <Typography variant="body1" className="text mt-[1rem] text-[1.3rem] leading-[2.2rem]">
                                        For further support, please contact us via:
                                    </Typography>
                                    <Typography variant="body1" className="support">
                                        Mobile phone: <strong>0966.158.666</strong> to
                                        supported.
                                    </Typography>
                                    <Typography variant="body1" className="support">
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
