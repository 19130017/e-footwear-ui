import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./OrderDetail.module.scss";
import ReceiptIcon from "@mui/icons-material/ReceiptOutlined";
const cx = classNames.bind(style);
function OrderDetail() {
    return (
        <Box className={cx("order-detail-section")}>
            <Box className={cx("header-wrapper")}>
                <Box className={cx("header-top")}>
                    <Typography variant="h5" className={cx("title")}>
                        Địa chỉ nhận hàng
                    </Typography>
                    <Box component={Link} to="/account/purchase" className={cx("btn-back")}>
                        Trở về
                    </Box>
                </Box>
                <Grid container spacing={2} className={cx("header-content")}>
                    <Grid item xs={6} className={cx("user-info")}>
                        <Typography variant="body1" className={cx("text")}>
                            Nguyen Van A
                        </Typography>
                        <Typography variant="body1" className={cx("text", "text-light")}>
                            0987654321
                        </Typography>
                        <Typography
                            variant="body1"
                            className={cx("text", "text-light", "text-ellipsis")}
                        >
                            TTN, 131, Xã Bồ Lý, Huyện Tam Đảo, Tỉnh Vĩnh Phúc
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className={cx("delivery-info")}>
                        <Box className={cx("delivery-log-wrapper")}>
                            <Box className={cx("rounded", "active")}></Box>
                            <Typography variant="body1" className={cx("delivery-log")}>
                                12:02 13/08/2022 - Chờ xác nhận
                            </Typography>                            
                        </Box>
                        <Box className={cx("delivery-log-wrapper")}>
                            <Box className={cx("rounded")}></Box>
                            <Typography variant="body1" className={cx("delivery-log")}>
                                12:02 13/08/2022 - Chờ xác nhận
                            </Typography>                            
                        </Box>
                        <Box className={cx("delivery-log-wrapper")}>
                            <Box className={cx("rounded")}></Box>
                            <Typography variant="body1" className={cx("delivery-log")}>
                                12:02 13/08/2022 - Chờ xác nhận
                            </Typography>                            
                        </Box>
                        <Box className={cx("delivery-log-wrapper")}>
                            <Box className={cx("rounded")}></Box>
                            <Typography variant="body1" className={cx("delivery-log")}>
                                12:02 13/08/2022 - Chờ xác nhận
                            </Typography>                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className={cx("product-wrapper")}>
                <Grid container alignItems="center" spacing={2} className={cx("product-item")}>
                    <Grid item>
                        <Avatar
                            variant="rounded"
                            src="https://cf.shopee.vn/file/02720304025688936d082bc723387c08_tn"
                            className={cx("product-image")}
                        />
                    </Grid>
                    <Grid item xs={6} className={cx("product-detail")}>
                        <Grid container direction="column">
                            <Grid item className={cx("name")}>
                                <Typography variant="body1" className={cx("text", "text-ellipsis")}>
                                    Giá đỡ để laptop stand notebook Macbook máy tính xách tay hợp
                                    kim nhôm có thể tháo rời kiêm tản nhiệt (CR06 và X2)
                                </Typography>
                            </Grid>
                            <Grid item className={cx("catgory")}>
                                <Typography variant="body1" className={cx("text", "text-light")}>
                                    Loại: Giày nam, size: 40
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={cx("price-wrapper")}>
                        <Typography variant="body1" className={cx("price")}>
                            500.000đ
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={cx("quantity-wrapper")}>
                        <Typography variant="body1" className={cx("quantity")}>
                            Số lượng: 1
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2} className={cx("product-item")}>
                    <Grid item>
                        <Avatar
                            variant="rounded"
                            src="https://cf.shopee.vn/file/02720304025688936d082bc723387c08_tn"
                            className={cx("product-image")}
                        />
                    </Grid>
                    <Grid item xs={6} className={cx("product-detail")}>
                        <Grid container direction="column">
                            <Grid item className={cx("name")}>
                                <Typography variant="body1" className={cx("text", "text-ellipsis")}>
                                    Giá đỡ để laptop stand notebook Macbook máy tính xách tay hợp
                                    kim nhôm có thể tháo rời kiêm tản nhiệt (CR06 và X2)
                                </Typography>
                            </Grid>
                            <Grid item className={cx("catgory")}>
                                <Typography variant="body1" className={cx("text", "text-light")}>
                                    Loại: Giày nam, size: 40
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={cx("price-wrapper")}>
                        <Typography variant="body1" className={cx("price")}>
                            500.000đ
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={cx("quantity-wrapper")}>
                        <Typography variant="body1" className={cx("quantity")}>
                            Số lượng: 1
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid container justifyContent="flex-end" className={cx("total-wrapper")}>
                <Grid item>
                    Tổng tiền:
                    <Typography variant="body1" className={cx("total")}>
                        21321321đ
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default OrderDetail;
