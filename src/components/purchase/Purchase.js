import { Box, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetOrders } from "~/redux/order/orderSlice";
import PurchaseHeader from "./PurchaseHeader";
import PurchaseContent from "./PurchaseContent";
import PurchaseFooter from "./PurchaseFooter";

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
                        <Box key={index} className="m-[2.4rem] p-6 lg:w-[95%] bg-black/5 rounded-2xl">
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
