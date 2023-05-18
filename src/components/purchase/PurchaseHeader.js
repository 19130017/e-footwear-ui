import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Purchase.module.scss";
import classNames from "classnames/bind";
import TruckIcon from "@mui/icons-material/LocalShippingOutlined";

const cx = classNames.bind(style);

function PurchaseHeader(props) {
    return (
        <Grid container className={cx("delivery-wrapper")}>
            <Grid item>
                <Box className={cx("delivery-status")}>
                    <TruckIcon className={cx("delivery-icon")} />
                    {props.data}
                </Box>
            </Grid>
        </Grid>
    );
}
export default PurchaseHeader;
