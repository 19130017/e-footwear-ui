import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import style from "./OrderDetail.module.scss";
import ReceiptIcon from "@mui/icons-material/ReceiptOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetOrder } from "~/redux/order/orderSlice";
import Loading from "../loading/Loading";
import { fetchGetProfile } from "~/redux/customer/customerSlice";
const cx = classNames.bind(style);
function OrderDetail() {
    const params = useParams();
    const { order, isLoading } = useSelector((state) => state.orderReducer);
    const { customer } = useSelector((state) => state.customerReducer);

    const { accessToken, accountId } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetOrder({ id: params.id, accessToken }));
        dispatch(fetchGetProfile({ accessToken, accountId }));
    }, [dispatch, params, accessToken]);

    console.log(order);
    return (
        <Paper className={cx("order-detail-section")}>
            <Box className={cx("header-wrapper")}>
                <Box className={cx("header-top")}>
                    <Box component={Link} to="/account/purchase" className={cx("btn-back")}>
                        Trở về
                    </Box>
                </Box>
                <Grid container spacing={2} className={cx("header-content")}>
                    <Grid item xs={6} className={cx("customer-info")}>
                        <Typography variant="h5" className={cx("title")}>
                            Thông tin người đặt
                        </Typography>
                        <Typography variant="body1" className={cx("text")}>
                            <span className={cx("subtitle")}> Tên người đặt: </span>
                            {customer?.lastName} {customer?.firstName}
                        </Typography>
                        <Typography variant="body1" className={cx("text", "text-light")}>
                            <span className={cx("subtitle")}>Ngày đặt: </span>
                            {order?.orderTime}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className={cx("delivery-info")}>
                        <Typography variant="h5" className={cx("title")}>
                            Thông tin nhận hàng
                        </Typography>
                        <Typography variant="body1" className={cx("text")}>
                            <span className={cx("subtitle")}> Người nhận hàng: </span>
                            {order?.address.fullName}
                        </Typography>
                        <Typography variant="body1" className={cx("text", "text-light")}>
                            <span className={cx("subtitle")}>SDT người nhận: </span>
                            {order?.address.phone}
                        </Typography>
                        <Typography
                            variant="body1"
                            className={cx("text", "text-light", "text-ellipsis")}
                        >
                            <span className={cx("subtitle")}> Địa chỉ giao hàng: </span>
                            {order?.address.address},{order?.address.addresses.wardName},
                            {order?.address.addresses.districtName},
                            {order?.address.addresses.provinceName}
                        </Typography>
                        <Typography
                            variant="body1"
                            className={cx("text", "text-light", "text-ellipsis")}
                        >
                            <span className={cx("subtitle")}>Ghi chú: </span>
                            {order?.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={cx("product-wrapper")}>
                <Typography variant="body1" className={cx("title")}>
                    Thông tin đơn hàng
                </Typography>
                {order &&
                    order.items.map((item, index) => (
                        <Grid
                            container
                            alignItems="center"
                            spacing={2}
                            className={cx("product-item")}
                            key={index}
                        >
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    src={item.detail.product.images[0].imageURL}
                                    className={cx("product-image")}
                                />
                            </Grid>
                            <Grid item xs={6} className={cx("product-detail")}>
                                <Grid container direction="column">
                                    <Grid item className={cx("name")}>
                                        <Typography
                                            variant="body1"
                                            className={cx("text", "text-ellipsis")}
                                        >
                                            {item.detail.product.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item className={cx("catgory")}>
                                        <Typography
                                            variant="body1"
                                            className={cx("text", "text-light")}
                                        >
                                            Loại: {item.detail.product.category.name}, 
                                            Kích cỡ: {item.detail.size.value}, 
                                            Màu: {item.detail.product.color.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} className={cx("price-wrapper")}>
                                <Typography variant="body1" className={cx("old-price")}>
                                    {item.detail.product.originPrice.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Typography>
                                <Typography variant="body1" className={cx("new-price")}>
                                    {item.price.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Typography>
                            </Grid>
                            <Grid item className={cx("quantity-wrapper")}>
                                <Typography variant="body1" className={cx("quantity")}>
                                    Số lượng: {item.quantity}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
            </Box>

            <Grid
                container
                alignItems="flex-end"
                flexDirection={"column"}
                className={cx("total-wrapper")}
            >
                <Grid item>
                    Phí vận chuyển:
                    <Typography variant="body1" className={cx("total")}>
                        {order?.transportFee === 0
                            ? "Miễn phí"
                            : order?.transportFee.toLocaleString("it-IT", {
                                  style: "currency",
                                  currency: "VND",
                              })}
                    </Typography>
                </Grid>
                <Grid item>
                    Tổng tiền:
                    <Typography variant="body1" className={cx("total")}>
                        {order?.cost.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </Typography>
                </Grid>
            </Grid>

            <Loading open={isLoading} />
        </Paper>
    );
}

export default OrderDetail;
