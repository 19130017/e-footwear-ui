import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import { Payment, Address } from "~/components/checkout-items";
import { AddressAdd } from "~/components/dialog";
import { checkoutData, userInfo } from "~/service/fakeData";
import style from "./Checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetAddresses } from "~/redux/address/addressSlice";

const cx = classnames.bind(style);

function Checkout() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const total = cart?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.discountPrice * currentValue.quantity;
    }, 0);
    const cost = total + total * 0.1;

    const dispatch = useDispatch();
    const { accountId, accessToken } = useSelector((state) => state.authReducer);
    const { addresses, isLoading } = useSelector((state) => state.addressReducer);

    useEffect(() => {
        dispatch(fetchGetAddresses({ accountId, accessToken }));
    }, [dispatch]);

    return (
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

                    <Address data={addresses} />
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
                                    value={"dtb751@gmail.com"}
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
                        sx={{ fontSize: "1.3rem" }}
                        inputProps={{ style: { padding: "1.2rem 1.4rem" } }}
                    />
                </Box>
                <Box className={cx("payment-method")}>
                    <Typography variant="h6" className={cx("title")}>
                        Phương thức thanh toán
                    </Typography>
                    <Typography variant="h6" className={cx("subtitle")}>
                        Thông tin thanh toán của bạn sẽ luôn được bảo mật
                    </Typography>

                    <Payment />
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
                                            src={item.imageURL}
                                            alt={item.name}
                                            className={cx("image")}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={8}
                                        className={cx("grid-column")}
                                        sx={{ marginLeft: "2rem" }}
                                    >
                                        <Link to={`/detail/${item.slug}/${item.color.id}`}>
                                            <Typography
                                                variant="body1"
                                                className={cx("product-name")}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Link>
                                        <Typography
                                            variant="body1"
                                            className={cx("product-quantity")}
                                        >
                                            Số lượng {item.quantity}
                                        </Typography>
                                        <Typography variant="body1" className={cx("product-price")}>
                                            {item.discountPrice.toLocaleString("it-IT", {
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
                                : Intl.NumberFormat("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                  }).format(11000)}
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

                    <Button variant="contained" className={cx("payment-btn")}>
                        Thanh toán
                    </Button>
                    <Typography variant="body2" className={cx("note")}>
                        Nhấn "Thanh toán" đồng nghĩa với việc bạn đọc và đồng ý tuân theo{" "}
                        <Link to={"/policy"}>Điều khoản và Điều kiện</Link>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Checkout;
