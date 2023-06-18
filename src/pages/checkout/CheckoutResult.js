import { Box, Button, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import fail from "~/assets/images/fail.png";
import success from "~/assets/images/success.png";
import { fetchUpdateStatus } from "~/redux/order/orderSlice";
import style from "./CheckoutResult.module.scss";
function CheckoutResult() {
    const cx = classNames.bind(style);
    const [searchParams, setSearchParams] = useSearchParams();
    const { accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const orderId = searchParams.get("orderId");
    const resultCode = searchParams.get("resultCode");
    const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
    const vnp_TxnRef = searchParams.get("vnp_TxnRef");
    const navigate = useNavigate();


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
    }, []);
    return (
        <Box>
            {order?.orderStatus?.code !== "FAILING" ? (
                <Box className={cx("error")}>
                    <Typography sx={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}>Cảm ơn bạn đã thanh toán</Typography>
                    <Box className={cx("wrap_image")} >
                        <img className={cx("result_image")} src={success} />
                    </Box>
                    <Typography sx={{ fontSize: '1.8rem' }} >Mã đơn hàng: {order?.id}</Typography>
                    <Typography sx={{ fontSize: '2rem', fontWeight: "bold", }}>Thanh toán thành công</Typography>
                    <Box className={cx("wrap-button")}>
                        <Button onClick={() => navigate("/")} sx={{ padding: '10px 15px', fontSize: '1.4rem', marginTop: '20px' }} variant="contained" className="btn-primary">Trở về trang chủ</Button>
                    </Box>
                </Box>
            ) : (
                <Box className={cx("error")}>
                    <Typography sx={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}>Có lỗi xảy ra trong quá trình thanh toán</Typography>
                    <Box className={cx("wrap_image")} >
                        <img className={cx("result_image")} src={fail} />
                    </Box>
                    <Typography sx={{ fontSize: '1.8rem' }} >Mã đơn hàng: {order?.id}</Typography>
                    <Typography sx={{ fontSize: '2rem', fontWeight: "bold", }}>Thanh toán thất bại</Typography>
                    <Box className={cx("wrap-button")}>
                        <Button onClick={() => navigate("/")} sx={{ padding: '10px 15px', fontSize: '1.4rem', marginTop: '20px' }} variant="contained" className="btn-primary">Trở về trang chủ</Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default CheckoutResult;
