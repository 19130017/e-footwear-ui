import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "~/components/sidebar/AccountSideBar";

function Account() {
    return (
        <Grid container sx={{ padding: "2rem 0", backgroundColor: "#eff0f4" }}>
            <Grid item xs={3}>
                <SideBar />
            </Grid>
            <Grid item xs={9}>
                <Outlet />
            </Grid>
        </Grid>
    );
}

export default Account;
