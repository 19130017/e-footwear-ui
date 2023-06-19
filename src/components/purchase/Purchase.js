import { Box, Paper } from "@mui/material";
import style from "./Purchase.module.scss";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetOrders } from "~/redux/order/orderSlice";
import PurchaseHeader from "./PurchaseHeader";
import PurchaseContent from "./PurchaseContent";
import PurchaseFooter from "./PurchaseFooter";
const cx = classNames.bind(style);

function Purchase() {
    const { accountId, accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.orderReducer);

    useEffect(() => {
        dispatch(fetchGetOrders({ accountId, accessToken }));
    }, [dispatch, accountId, accessToken]);

    return (
        <Paper className={cx("purchase-section")}>
            {orders &&
                orders.map((order, index) => {
                    return (
                        <Box key={index} className={cx("purchase-item")}>
                            <PurchaseHeader data={order.orderStatus?.description} />
                            {order?.items.map((item, i) => (
                                <PurchaseContent key={i} id={order.id} item={item} />
                            ))}

                            <PurchaseFooter data={order.cost} />
                        </Box>
                    );
                })}
        </Paper>
    );
}
export default Purchase;
