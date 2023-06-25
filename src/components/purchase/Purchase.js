import { Box, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetOrders } from "~/redux/order/orderSlice";
import { OrderProduct } from "../order-product";
import PurchaseFooter from "./PurchaseFooter";
import PurchaseHeader from "./PurchaseHeader";

function Purchase() {
    const { accountId, accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.orderReducer);

    useEffect(() => {
        dispatch(fetchGetOrders({ accountId, accessToken }));
    }, [dispatch, accountId, accessToken]);

    return (
        <Paper className="pb-12 rounded-2xl overflow-hidden">
            {orders &&
                orders.map((order, index) => {
                    return (
                        <Box
                            key={index}
                            className="m-[2.4rem] p-6 lg:w-[95%] bg-black/5 rounded-2xl"
                        >
                            <PurchaseHeader data={order.orderStatus?.description} />
                            
                            {order?.items.map((item, i) => (
                                <Link
                                    key={i}
                                    to={`/account/purchase/order/${order?.id}`}
                                    className="no-underline relative"
                                >
                                    <OrderProduct item={item} />
                                </Link>
                            ))}

                            <PurchaseFooter data={order.cost} />
                        </Box>
                    );
                })}
        </Paper>
    );
}
export default Purchase;
