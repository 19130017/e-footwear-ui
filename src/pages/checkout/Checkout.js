import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "~/components/breadcrumbs/Breadcrumb";
import { Address, Payment } from "~/components/checkout-items";
import Coupon from "~/components/coupon";
import { AddressAdd } from "~/components/dialog";
import { fetchGetAddresses } from "~/redux/address/addressSlice";
import { clearCart } from "~/redux/cart/cartSlice";
import { fetchGetCoupons } from "~/redux/coupon/couponSlice";
import {
    fetchCreateOrder,
    fetchCreateOrderMomo,
    fetchCreateOrderVN_Pay,
} from "~/redux/order/orderSlice";

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
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchGetCoupons());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchGetAddresses({ accountId, accessToken }));
    }, [dispatch, isChanged]);
    const total = cart?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    const cost = total + total * 0.1 + (total > 700000 ? 0 : 11000) - (coupon ? coupon.price : 0);
    const sendRedirect = async (url) => {
        window.location.href = url;
    };
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
                        dispatch(clearCart());
                    }
                    break;
                case "MOMO":
                    const responseMOMO = await dispatch(fetchCreateOrderMomo(common));
                    if (responseMOMO.payload.data?.errorCode === 0) {
                        await sendRedirect(responseMOMO.payload.data?.payUrl);
                    }
                    break;
                case "VNPay":
                    const responseVNPay = await dispatch(fetchCreateOrderVN_Pay(common));
                    if (responseVNPay.payload.success) {
                        await sendRedirect(responseVNPay.payload?.data);
                    }
                    break;
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
        <Box className="mb-4 container mx-auto">
            <Breadcrumb data={breadcrumbs} />
            <Grid
                container
                className="bg-[#f8f8fc] p-[3rem 1rem 1rem 3rem] flex flex-col md:flex-row"
            >
                <Grid item xs={12} md={6} lg={8} className="bg-[#f8f8fc] ">
                    <Box className="p-5 bg-white rounded-2xl">
                        <Typography variant="h6" className="text-3xl pb-4 font-bold">
                            Thông tin nhận hàng
                        </Typography>

                        <Address data={addresses} parentCallback={handleSelectAddress} />
                        <Box className="flex items-center justify-center">
                            <Box className="border border-solid border-gray">
                                <AddressAdd
                                    accountId={accountId}
                                    accessToken={accessToken}
                                    dispatch={dispatch}
                                />
                            </Box>
                        </Box>
                        <Typography variant="h6" className="text-2xl pb-4 pl-4 font-bold">
                            Phương thức giao hàng
                        </Typography>
                        <Box className="flex ml-8 items-center">
                            <Box className="relative h-7 w-7">
                                <Box
                                    component={"input"}
                                    type="radio"
                                    defaultChecked
                                    className="p-0 hidden"
                                />
                                <Box
                                    className="p-2 border border-solid border-[#1435c3] rounded-[100%] 
                                inset-0 relative cursor-pointer h-6 w-6 flex items-center justify-center"
                                >
                                    <Box className="absolute w-1/2 h-1/2 rounded-[50%] t-1/2 l-1/2 block bg-[#1435c3]"></Box>
                                </Box>
                            </Box>
                            <Grid container className="p-[1rem 1rem 0 3rem]">
                                <Grid item xs={9}>
                                    <Typography variant="body1" className="text-xl ">
                                        Giao tiêu chuẩn
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    {total < 700000 ? (
                                        <Typography
                                            variant="body1"
                                            className={"text-xl text-right"}
                                        >
                                            {Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(11000)}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="body1"
                                            className={"text-xl text-right text-[#30cd60]"}
                                        >
                                            Miễn phí
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography variant="h6" className="text-2xl pt-4 px-4 font-bold">
                            Nhận Mã online, hóa đơn qua email
                        </Typography>
                        <Box className="p-[1rem 1rem 0 3rem]">
                            <Box className="border border-solid border-[#f6f6f6] rounded-lg m-0 pl-6">
                                <Box>
                                    <Box
                                        component={"input"}
                                        type="text"
                                        value={
                                            addressDelivery?.email
                                                ? addressDelivery.email
                                                : "dtb7@gmail.com"
                                        }
                                        readOnly={true}
                                        className="border-none outline-none text-xl"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="bg-white mt-4 rounded-2xl p-5 mx-4">
                        <Typography variant="h6" className="mb-2 text-2xl ">
                            Ghi chú cho đơn hàng
                        </Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Nhập thông tin ghi chú cho nhà bán hàng"
                            name="note"
                            fullWidth
                            inputProps={{ className: "py-5 px-6 text-2xl" }}
                            onChange={(e) => handleChangeDescription(e)}
                        />
                    </Box>
                    <Box className="bg-white mt-4 rounded-2xl p-5">
                        <Typography variant="h6" className="text-3xl font-bold pb-4">
                            Phương thức thanh toán
                        </Typography>

                        <Payment callbackParent={handleCallback} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4} className="bg-[#e4e7e9] rounded-2xl">
                    <Box className="rounded-2xl bg-white p-4 mx-4 mt-4">
                        <Box className="flex justify-between items-center">
                            <Typography variant="h4" className="font-bold text-3xl pb-4">
                                Thông tin đơn hàng
                            </Typography>
                            <Link to={"/cart"} className="text-2xl hover:no-underline">
                                Chỉnh sửa
                            </Link>
                        </Box>
                        <Box className="p-1">
                            {cart?.map((item, index) => (
                                <Box
                                    key={index}
                                    className="py-4 my-4 last:border-none border-b border-solid border-gray"
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={3} sm={3}>
                                            <img
                                                src={item.detail.product.imageURL}
                                                alt={item.detail.product.name}
                                                className="w-full"
                                            />
                                        </Grid>
                                        <Grid item xs={9} sm={9}>
                                            <Grid container className="items-center h-full">
                                                <Grid item xs={12} sm={9} md={7}>
                                                    <Grid container>
                                                        <Grid item xs={12} sm={12}>
                                                            <Link
                                                                to={`/detail/${item.detail.product.slug}/${item.detail.product.color.id}`}
                                                                className="hover:no-underline"
                                                            >
                                                                <Typography
                                                                    variant="body1"
                                                                    className="text-slip text-2xl text-[#434657] "
                                                                >
                                                                    {item.detail.product.name}
                                                                </Typography>
                                                            </Link>
                                                        </Grid>

                                                        <Grid item xs={12} sm={12}>
                                                            <Typography
                                                                variant="body1"
                                                                className="text-2xl text-[#82869e]"
                                                            >
                                                                Kích thước: {item?.detail.size}
                                                            </Typography>{" "}
                                                            <Typography
                                                                variant="body1"
                                                                className="text-2xl text-[#82869e]"
                                                            >
                                                                Màu sắc:{" "}
                                                                {item?.detail.product.color.name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <Typography
                                                                variant="body1"
                                                                className="text-2xl text-[#82869e]"
                                                            >
                                                                Số lượng: {item.quantity}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} sm={3} md={5}>
                                                    <Typography
                                                        variant="body1"
                                                        className="text-2xl font-bold text-danger md:text-end"
                                                    >
                                                        {item.price.toLocaleString("it-IT", {
                                                            style: "currency",
                                                            currency: "VND",
                                                        })}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    {/* coupon */}
                    {coupons && (
                        <Box className="rounded-2xl bg-[#ccc] p-4 mt-8 overflow-hidden mx-4">
                            {coupons.map((item, index) => (
                                <Coupon
                                    key={index}
                                    item={item}
                                    parentCallback={handleChooseCoupon}
                                    id={coupon?.id}
                                />
                            ))}
                        </Box>
                    )}

                    <Box className="rounded-2xl bg-white px-8 py-5 my-8 mx-4">
                        <Box className="flex justify-between items-start mb-4">
                            <Typography variant="body1" className="text-2xl text-[#848788]">
                                Tổng tạm tính
                            </Typography>
                            <Typography variant="body1" className="text-2xl font-bold">
                                {total.toLocaleString("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </Typography>
                        </Box>
                        <Box className="flex justify-between items-start mb-4">
                            <Typography variant="body1" className="text-2xl text-[#848788]">
                                Phí vận chuyển
                            </Typography>
                            <Typography variant="body1" className="text-2xl font-bold">
                                {total > 700000
                                    ? "Miễn phi"
                                    : (11000).toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                            </Typography>
                        </Box>
                        <Box className="flex justify-between items-start mb-4">
                            <Typography variant="body1" className="text-2xl text-[#848788]">
                                Giảm giá
                            </Typography>
                            <Typography variant="body1" className="text-2xl font-bold">
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
                        <Box className="flex justify-between items-start mb-4">
                            <Typography variant="body1" className="text-2xl text-[#848788]">
                                Thành tiền
                            </Typography>
                            <Box>
                                <Typography
                                    variant="body1"
                                    className="text-4xl font-bold text-danger"
                                >
                                    {cost.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Typography>
                                <Typography variant="body2" className="text-xl">
                                    (Đã bao gồm VAT)
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="flex justify-center  mt-12 mb-8">
                            <Button
                                variant="contained"
                                className="bg-black text-white rounded-lg shadow-none hover:shadow-none text-2xl normal-case py-4 "
                                onClick={handleClick}
                            >
                                Thanh toán
                            </Button>
                        </Box>
                        <Typography variant="body2" className="text-xl">
                            Nhấn "Thanh toán" đồng nghĩa với việc bạn đọc và đồng ý tuân theo{" "}
                            <Link to={"/policy"} className="text-link underline">
                                Điều khoản và Điều kiện
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Checkout;
