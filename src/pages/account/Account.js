import { Box, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideBar } from "~/components/sidebar";
import "./Account.scss";

function Account() {
    return (
        <Box className="pb-12 account-section">
            <Box className="theme bg-account-theme px-[3.2rem]">
                <Box className="py-24 pl-6 pr-12">
                    <Typography
                        variant="h4"
                        className="text-white leading-[6rem] text-3xl lg:text-6xl"
                    >
                        Account settings
                    </Typography>
                    <Typography variant="h6" className="text-white text-xl lg:text-4xl">
                        Change account information and settings
                    </Typography>
                </Box>
            </Box>
            <Box className="w-full pl-6 pr-6 mt-[-6.4rem] ">
                <Grid container spacing={4} className="mt-[-3.2rem] flex-col">
                    <Grid item xs={12} md={3} lg={3}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Account;
