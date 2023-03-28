import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import classnames from "classnames/bind";
import style from "./Payment.module.scss";
const cx = classnames.bind(style);

function Payment() {
    return (
        <Grid container spacing={2} className={cx("method-payment-list")}>
            <Grid item xs={6} className={cx("method-payment-item")}>
                <Box
                    component={"input"}
                    type="radio"
                    name="payment"
                    defaultChecked
                    id="momo-payment"
                    hidden
                />
                <Box component={"label"} htmlFor="momo-payment">
                    <Box
                        data-content-region="paymentMethod"
                        data-track-content="true"
                        data-content-name="MOMO_GATEWAY"
                        data-content-target="MOMO_GATEWAY"
                        className={cx("card", "active")}
                    >
                        <Box className={cx("subtitle")}>
                            Thanh toán qua MOMO
                            <Box component={"span"} className={cx("recommend")}>
                                Khuyên dùng
                            </Box>
                        </Box>
                        <Box className={cx("payment-body")}>
                            Thanh toán qua Internet Banking, Visa, Master, JCB, MOMO
                        </Box>
                        <Box className={cx("pseudo")}>
                            <CheckIcon className={cx("icon")} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className={cx("method-payment-item")}>
                <Box component={"input"} type="radio" name="payment" id="cod-payment" hidden />
                <Box component={"label"} htmlFor="cod-payment">
                    <Box
                        data-content-region="paymentMethod"
                        data-track-content="true"
                        data-content-name="COD"
                        data-content-target="COD"
                        className={cx("card", "active")}
                    >
                        <Box className={cx("subtitle")}>Thanh toán khi nhận hàng</Box>
                        <Box className={cx("pseudo")}>
                            <CheckIcon className={cx("icon")} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
export default Payment;
