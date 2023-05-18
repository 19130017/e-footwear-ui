import { Box, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideBar } from "~/components/sidebar";
import classnames from "classnames/bind";
import style from "./Account.module.scss";
const cx = classnames.bind(style);

function Account() {
    return (
        <Box className={cx("account-section")}>
            <Box className={cx("theme")}>
                <Box className={cx("them-content")}>
                    <Typography variant="h4" className={cx("text", "title")}>
                        Account settings
                    </Typography>
                    <Typography variant="h6" className={cx("text", "subtitle")}>
                        Change account information and settings
                    </Typography>
                </Box>
            </Box>
            <Box className={cx("main")}>
                <Grid container spacing={4} className={cx("main-grid")}>
                    <Grid item xs={3}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={9}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Account;
