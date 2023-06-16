import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchUpdateStatus } from "~/redux/order/orderSlice";

function CheckoutResult() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const orderId = searchParams.get("orderId");
        const resultCode = searchParams.get("resultCode");
        const code = resultCode == 0 ? "SUCCESS" : "FAILING";
        dispatch(
            fetchUpdateStatus({
                orderRequest: {
                    orderId: orderId,
                    code: code,
                },
                accessToken,
            })
        );
    }, []);

    return (
        <Box>
            {searchParams.get("resultCode") == 0 ? (
                <Typography variant="body1">Thanh toán thành công</Typography>
            ) : (
                <Typography variant="body">Thanh toán thất bại</Typography>
            )}
        </Box>
    );
}

export default CheckoutResult;
