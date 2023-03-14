import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Purchase.module.scss";
import classNames from "classnames/bind";
import TruckIcon from "@mui/icons-material/LocalShippingOutlined";
import MoneyIcon from "@mui/icons-material/AttachMoney";
const cx = classNames.bind(style);

function PurchaseHeader({ cx, status, id }) {
    return (
        <Grid container className={cx("delivery-wrapper")}>
            <Grid item>
                <Link to={`/account/purchase/order/:${id}`} className={cx("delivery-status")}>
                    <TruckIcon className={cx("delivery-icon")} />
                    {status}
                </Link>
            </Grid>
        </Grid>
    );
}

function PurchaseFooter({ cx }) {
    return (
        <Box className={cx("total-wrapper")}>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Typography variant="body1" className={cx("cost-wrapper")}>
                        <MoneyIcon /> Thành tiền:
                        <span className={cx("cost")}>300.000đ</span>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

function PurchaseContent({ id, cx }) {
    return (
        <Box className={cx("product-wrapper")}>
            <Link to={`/account/purchase/order/:${id}`} className={cx("product-link")}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Avatar
                            variant="rounded"
                            src="https://cf.shopee.vn/file/02720304025688936d082bc723387c08_tn"
                            className={cx("product-image")}
                        />
                    </Grid>
                    <Grid item xs={8} className={cx("product-detail")}>
                        <Grid container direction="column">
                            <Grid item className={cx("name")}>
                                <Typography variant="body1" className={cx("text", "text-ellipsis")}>
                                    Giá đỡ để laptop stand notebook Macbook máy tính xách tay hợp
                                    kim nhôm có thể tháo rời kiêm tản nhiệt (CR06 và X2)
                                </Typography>
                            </Grid>
                            <Grid item className={cx("catgory")}>
                                <Typography variant="body1" className={cx("text", "text-light")}>
                                    Phân loại hàng: Bạc- CR06
                                </Typography>
                            </Grid>
                            <Grid item className={cx("quantity")}>
                                <Typography variant="body1" className={cx("text")}>
                                    x1
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={cx("price-wrapper")}>
                        <Typography variant="body1" className={cx("old-price")}>
                            500.000đ
                        </Typography>
                        <Typography variant="body1" className={cx("new-price")}>
                            300.000đ
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </Box>
    );
}

function Purchase() {
    return (
        <Box className={cx("purchase-section")}>
            <Box className={cx("purchase-item")}>
                <PurchaseHeader id={"123"} cx={cx} status={"Giao hành thành công"} />
                <PurchaseContent id={"123"} cx={cx} />
                <PurchaseFooter cx={cx} />
            </Box>
            <Box className={cx("purchase-item")}>
                <PurchaseHeader id={"123"} cx={cx} status={"Giao hành thành công"} />
                <PurchaseContent id={"123"} cx={cx} />
                <PurchaseFooter cx={cx} />
            </Box>
        </Box>
    );
}
export default Purchase;
