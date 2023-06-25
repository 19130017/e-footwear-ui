import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import "./Payment.scss";

function Payment({ callbackParent }) {
    return (
        <Grid container className="my-8">
            <Grid item xs={12} lg={4} className="p-0 mb-4 pl-8 ">
                <Box
                    component={"input"}
                    type="radio"
                    name="payment"
                    defaultChecked
                    id="momo-payment"
                    data-content-name="MOMO"
                    hidden
                    onChange={(e) => callbackParent(e)}
                />
                <Box component={"label"} htmlFor="momo-payment">
                    <Box className="lg:min-h-[100px] card active border border-solid border-[#e0e0e0] py-4 px-6 overflow-hidden rounded-ld cursor-pointer ">
                        <Box className="text-2xl font-bold leading-9 flex items-center justify-start">
                            Thanh toán qua MOMO
                            {/* <Box
                                component={"span"}
                                className=" md:w-1/2 text-xl inline md:text-sm bg-[#1435c3] text-white rounded-md leading-7 ml-4 md:ml-0 p-1"
                            >
                                Khuyên dùng
                            </Box> */}
                        </Box>
                        <Box className="text-[#82869e] text-xl font-medium mt-2">
                            Thanh toán qua ví điện tử MOMO.
                        </Box>
                        <Box className="pseudo">
                            <CheckIcon className="icon" />
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} lg={4} className="p-0 mb-4 pl-8 ">
                <Box
                    component={"input"}
                    type="radio"
                    name="payment"
                    defaultChecked
                    id="vnpay-payment"
                    hidden
                    data-content-name="VNPay"
                    onChange={(e) => callbackParent(e)}
                />
                <Box component={"label"} htmlFor="vnpay-payment">
                    <Box className="lg:min-h-[100px] card active border border-solid border-[#e0e0e0] py-4 px-6 overflow-hidden rounded-ld cursor-pointer ">
                        <Box className="text-2xl font-bold leading-9 flex items-center">
                            Thanh toán bằng VNPAY
                        </Box>
                        <Box className="text-[#82869e] text-xl font-medium mt-2">
                            Thanh toán qua cổng thanh toán VNPay.
                        </Box>
                        <Box className="pseudo">
                            <CheckIcon className="icon" />
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} lg={4} className="p-0 mb-4 pl-8 ">
                <Box
                    component={"input"}
                    type="radio"
                    name="payment"
                    defaultChecked
                    id="cod-payment"
                    hidden
                    data-content-name="COD"
                    onChange={(e) => callbackParent(e)}
                />
                <Box component={"label"} htmlFor="cod-payment">
                    <Box className=" lg:min-h-[100px] card active border border-solid border-[#e0e0e0] py-4 px-6 overflow-hidden rounded-ld cursor-pointer ">
                        <Box className="text-2xl font-bold leading-9 flex items-center">
                            Thanh toán khi nhận hàng
                        </Box>
                        <Box className="text-[#82869e] text-xl font-medium mt-2">
                            Thanh toán bằng tiền mặt khi nhận hàng.
                        </Box>
                        <Box className="pseudo">
                            <CheckIcon className="icon" />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
export default Payment;
