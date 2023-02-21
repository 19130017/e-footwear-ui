import { Box, Grid, Link } from "@mui/material";
import logo from "~/assets/images/logo.png";
import classNames from "classnames/bind";
import style from "./FullWidthLayout.module.scss";
const cx = classNames.bind(style);
function FullWidthLayout({ children }) {
    return (
        <Box>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Link href="/" className={cx("link")}>
                        <img src={logo} alt="" className={cx("logo")} />
                    </Link>
                </Grid>
            </Grid>

            <Box>{children}</Box>
        </Box>
    );
}

export default FullWidthLayout;
