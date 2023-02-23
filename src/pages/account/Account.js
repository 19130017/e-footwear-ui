import { Box } from "@mui/material";
import { Link, Navigate, Outlet } from "react-router-dom";

function Account() {
    return (
        <Box>
            <Link to="/account/profile">profile</Link>
            <Link to="/account/change-password">thay đổi mk</Link>
            <Outlet />
        </Box>
    );
}

export default Account;
