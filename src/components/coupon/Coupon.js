import { Box, Button, Typography } from "@mui/material";
import style from "./Coupon.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function Coupon(props) {
    const { item, parentCallback, id } = props;
    return (
        <Box className={cx("coupon-item")}>
            <Box className={cx("coupon-item-left")}>
                <img
                    src="https://file.hstatic.net/1000230642/file/icon-coupon-3_c002643e1e1f4f4197daf580deed043a.png"
                    alt="discount"
                    className={cx("coupon-image")}
                />
            </Box>
            <Box className={cx("coupon-item-right")}>
                <Box className={cx("coupon-info")}>
                    <Typography variant="body1" className={cx("discount")}>
                        <span> Giảm giá</span>
                        {item?.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </Typography>
                    <Typography variant="body2" className={cx("max-count")}>
                        <span>Số lượng còn:</span> {item?.maxUsage}
                    </Typography>
                    <Typography variant="body2" className={cx("code")}>
                        <span> Mã: </span>
                        {item?.code}
                    </Typography>
                    <Typography variant="body2" className={cx("end-time")}>
                        <span> HSD:</span>
                        {item?.endTime}
                    </Typography>
                </Box>
                <Box className={cx("coupon-btn")}>
                    <Button
                        variant="contained"
                        className={cx("btn-use", `${item?.id == id ? "active" : ""}`)}
                        onClick={(e) => parentCallback(e, item)}
                        disabled={item?.id == id ? true : false}
                    >
                        Sử dụng
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Coupon;
