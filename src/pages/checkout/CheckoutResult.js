import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchUpdateStatus } from "~/redux/order/orderSlice";

function CheckoutResult() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const orderId = searchParams.get("orderId");
    const resultCode = searchParams.get("resultCode");
    const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
    const vnp_TxnRef = searchParams.get("vnp_TxnRef");

    const isSuccess = resultCode == "0" || vnp_ResponseCode == "00";
    const code = isSuccess ? "SUCCESS" : "FAILING";
    const order = useSelector((state) => state.orderReducer.order);

    useEffect(() => {
        dispatch(
            fetchUpdateStatus({
                orderRequest: {
                    orderId: orderId || vnp_TxnRef,
                    code: code,
                },
                accessToken,
            })
        );
    }, [orderId, vnp_TxnRef, dispatch, code, accessToken]);
    console.log(order);
    return (
        <Box>
            {order?.message !== "FAILING" ? (
                <Typography variant="body1">Thanh toán thành công</Typography>
            ) : (
                <Typography variant="body">Thanh toán thất bại</Typography>
            )}
        </Box>
    );
}

export default CheckoutResult;
