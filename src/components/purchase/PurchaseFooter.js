import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import style from "./Purchase.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function PurchaseFooter(props) {
    return (
        <Box className={cx("total-wrapper")}>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Typography variant="body1" className={cx("cost-wrapper")}>
                        <MoneyIcon /> Thành tiền:
                        <span className={cx("cost")}>
                            {props?.data.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </span>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
export default PurchaseFooter;
