import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVerifyAccount } from "~/redux/auth/authSlice";

function VerifyAccount() {
    const token = useParams();
    const dispatch = useDispatch();
    const { response } = useSelector((state) => state.authReducer);
    useEffect(() => {
        dispatch(fetchVerifyAccount(token));
    }, [dispatch]);

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            h{response && <Typography variant="body1">{response?.message}</Typography>}
        </Box>
    );
}

export default VerifyAccount;
