import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import classnames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { Payment, Address } from "~/components/checkout-items";
import { AddressAdd } from "~/components/dialog";
import style from "./Checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGetAddresses } from "~/redux/address/addressSlice";
import { fetchCreateOrder, fetchCreateOrderMomo, fetchCreateOrderVN_Pay } from "~/redux/order/orderSlice";
import { clearCart } from "~/redux/cart/cartSlice";
import Coupon from "~/components/coupon";
import { fetchGetCoupons } from "~/redux/coupon/couponSlice";
import Breadcrumb from "~/components/breadcrumbs/Breadcrumb";

const cx = classnames.bind(style);

function Checkout() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
    const { accountId, accessToken } = useSelector((state) => state.authReducer);
    const { addresses, isChanged } = useSelector((state) => state.addressReducer);
    const [addressDelivery, setAddressDelivery] = useState(null);
    const [description, setDescription] = useState(null);
    const [coupon, setCoupon] = useState(null);
    const { coupons } = useSelector((state) => state.couponReducer);
    const [paymentMethod, setPaymentMethod] = useState("MOMO");
    useEffect(() => {
        dispatch(fetchGetCoupons());
    }, [dispatch]);

    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchGetAddresses({ accountId, accessToken }));
    }, [dispatch, isChanged]);
    const total = cart?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    const cost = total + total * 0.1 + (total > 700000 ? 0 : 11000) - (coupon ? coupon.price : 0);

    const handleClick = async () => {
        if (addressDelivery) {
            const temp = cart.map((item) => ({
                price: item.price,
                quantity: item.quantity,
                detail: { id: item.detail.id },
            }));
            const common = {
                cost,
                transportFee: total > 700000 ? 0 : 11000,
                description,
                coupon: coupon,
                account: {
                    id: accountId,
                },
                address: {
                    id: addressDelivery.id,
                },
                items: temp,
                accessToken,
            };

            switch (paymentMethod) {
                case "COD":
                    const responseCOD = await dispatch(fetchCreateOrder(common));
                    if (responseCOD.payload.success) {
                        navigate("/");
                        await dispatch(clearCart());
                    }
                    break;
                case "MOMO":
                    const responseMOMO = await dispatch(fetchCreateOrderMomo(common));
                    console.log(responseMOMO);
                    if (responseMOMO.payload.data?.errorCode === 0) {
                        window.location.href = responseMOMO.payload.data?.payUrl;
                        await dispatch(clearCart());
                    }
                    break;
                case "VN_PAY":
                    const responseVNPay = await dispatch(fetchCreateOrderVN_Pay(common));
                    await dispatch(clearCart());
                default:
                    alert("Vui lòng chọn phương thức thanh toán");
            }
        } else {
            alert("Chọn địa chỉ giao hàng");
        }
    };

    const handleSelectAddress = (item) => {
        setAddressDelivery(item);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleChooseCoupon = (e, item) => {
        setCoupon(item);
    };
    const breadcrumbs = [
        <Typography color="text.primary" sx={{ fontSize: "1.3rem" }} key={1}>
            Đặt hàng
        </Typography>,
    ];

    const handleCallback = (e) => {
        const paymentMethod = e.target.getAttribute("data-content-name");
        setPaymentMethod(paymentMethod);
    };

    return (
        <Box>
            <Breadcrumb data={breadcrumbs} />
            <Grid container spacing={2} className={cx("checkout")}>
                <Grid item xs={8} className={cx("checkout-left")}>
                    <Box className={cx("info-address")}>
                        <Typography
                            variant="h6"
                            className={cx("subtitle")}
                            sx={{ padding: "0 0 1rem 1rem", fontWeight: "bold" }}
                        >
                            Thông tin nhận hàng
                        </Typography>

                        <Address data={addresses} parentCallback={handleSelectAddress} />
                        <Box className={cx("add-address")}>
                            <AddressAdd
                                accountId={accountId}
                                accessToken={accessToken}
                                dispatch={dispatch}
                            />
                        </Box>
                        <Typography
                            variant="h6"
                            className={cx("subtitle")}
                            sx={{ padding: "0 0 1rem 1rem", fontWeight: "bold" }}
                        >
                            Phương thức giao hàng
                        </Typography>
                        <Box className={cx("wrapper")}>
                            <Box className={cx("radio-wrapper")}>
                                <Box
                                    component={"input"}
                                    type="radio"
                                    defaultChecked
                                    className={cx("radio-btn")}
                                />
                                <Box className={cx("border-box")}>
                                    <Box className={cx("rounded")}></Box>
                                </Box>
                            </Box>
                            <Grid container className={cx("delivery-wrapper")}>
                                <Grid item xs={9}>
                                    <Typography variant="body1" className={cx("subtitle")}>
                                        Giao tiêu chuẩn
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    {total < 700000 ? (
                                        <Typography
                                            variant="body1"
                                            className={cx("subtitle", "text-right")}
                                        >
                                            {Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(11000)}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="body1"
                                            sx={{ fontSize: "1.3rem", color: "#30cd60" }}
                                            className={cx("text-right")}
                                        >
                                            Miễn phí
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography
                            variant="h6"
                            className={cx("subtitle")}
                            sx={{ padding: "1rem 0 0 1rem", fontWeight: "bold" }}
                        >
                            Nhận Mã online, hóa đơn qua email
                        </Typography>
                        <Box className={cx("delivery-email")}>
                            <Box className={cx("wrapper")}>
                                <Box>
                                    <Box
                                        component={"input"}
                                        type="text"
                                        value={addressDelivery?.email ? addressDelivery.email : ""}
                                        readOnly={true}
                                        sx={{ border: "none", outline: "none", fontSize: "1.3rem" }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className={cx("order-note")}>
                        <Typography variant="h6" className={cx("subtitle")}>
                            Ghi chú cho đơn hàng
                        </Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Nhập thông tin ghi chú cho nhà bán hàng"
                            name="note"
                            fullWidth
                            inputProps={{ style: { padding: "1.2rem 1.4rem", fontSize: "1.4rem" } }}
                            onChange={(e) => handleChangeDescription(e)}
                        />
                    </Box>
                    <Box className={cx("payment-method")}>
                        <Typography variant="h6" className={cx("title")}>
                            Phương thức thanh toán
                        </Typography>

                        <Payment callbackParent={handleCallback} />
                    </Box>
                </Grid>
                <Grid item xs={4} className={cx("checkout-right")}>
                    <Box className={cx("info-order")}>
                        <Box className={cx("title-wrapper")}>
                            <Typography variant="h4" className={cx("title")}>
                                Thông tin đơn hàng
                            </Typography>
                            <Link to={"/cart"} className={cx("link")}>
                                Chỉnh sửa
                            </Link>
                        </Box>
                        <Box className={cx("info-body")}>
                            {cart?.map((item, index) => (
                                <Box key={index} className={cx("checkout-item")}>
                                    <Grid container className={cx("grid-row")}>
                                        <Grid item xs={3} className={cx("grid-column")}>
                                            <img
                                                src={item.detail.product.imageURL}
                                                alt={item.detail.product.name}
                                                className={cx("image")}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={8}
                                            className={cx("grid-column")}
                                            sx={{ marginLeft: "2rem" }}
                                        >
                                            <Link
                                                to={`/detail/${item.detail.product.slug}/${item.detail.product.color.id}`}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    className={cx("product-name")}
                                                >
                                                    {item.detail.product.name}
                                                </Typography>
                                            </Link>
                                            <Typography
                                                variant="body1"
                                                className={cx("product-quantity")}
                                            >
                                                Số lượng {item.quantity}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                className={cx("product-price")}
                                            >
                                                {item.price.toLocaleString("it-IT", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    {/* coupon */}
                    <Box className={cx("coupon-wrapper")}>
                        {coupons &&
                            coupons.map((item, index) => (
                                <Coupon
                                    key={index}
                                    item={item}
                                    parentCallback={handleChooseCoupon}
                                    id={coupon?.id}
                                />
                            ))}
                    </Box>

                    <Box className={cx("summary-order")}>
                        <Box className={cx("d-flex")}>
                            <Typography variant="body1" className={cx("subtitle")}>
                                Tổng tạm tính
                            </Typography>
                            <Typography variant="body1" className={cx("subtitle--bold")}>
                                {total.toLocaleString("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </Typography>
                        </Box>
                        <Box className={cx("d-flex")}>
                            <Typography variant="body1" className={cx("subtitle")}>
                                Phí vận chuyển
                            </Typography>
                            <Typography variant="body1" className={cx("subtitle--bold")}>
                                {total > 700000
                                    ? "Miễn phi"
                                    : (11000).toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                            </Typography>
                        </Box>
                        <Box className={cx("d-flex")}>
                            <Typography variant="body1" className={cx("subtitle")}>
                                Giảm giá
                            </Typography>
                            <Typography variant="body1" className={cx("subtitle--bold")}>
                                {coupon === null ? (
                                    "0 VND"
                                ) : (
                                    <span>
                                        -
                                        {coupon?.price.toLocaleString("it-IT", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </span>
                                )}
                            </Typography>
                        </Box>
                        <Box className={cx("d-flex")}>
                            <Typography variant="body1" className={cx("subtitle")}>
                                Thành tiền
                            </Typography>
                            <Box>
                                <Typography variant="body1" className={cx("subtitle-cost")}>
                                    {cost.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Typography>
                                <Typography variant="body2" className={cx("note-vat")}>
                                    (Đã bao gồm VAT)
                                </Typography>
                            </Box>
                        </Box>

                        <Button
                            variant="contained"
                            className={cx("payment-btn")}
                            onClick={handleClick}
                        >
                            Thanh toán
                        </Button>
                        <Typography variant="body2" className={cx("note")}>
                            Nhấn "Thanh toán" đồng nghĩa với việc bạn đọc và đồng ý tuân theo{" "}
                            <Link to={"/policy"}>Điều khoản và Điều kiện</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Checkout;
