import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "~/components/loading/Loading";
import { fetchVerifyAccount } from "~/redux/auth/authSlice";
import NotFound from "../not-found/NotFound";

function VerifyAccount() {
    const token = useParams();
    const dispatch = useDispatch();
    const { response, isLoading } = useSelector((state) => state.authReducer);
    useEffect(() => {
        dispatch(fetchVerifyAccount(token));
    }, [dispatch]);

    const navigate = useNavigate();
    useEffect(() => {
        if (response.success) navigate("/auth/sign-in");
    }, [response]);
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {response?.success ? <Box sx={{ height: "80vh" }}></Box> : <NotFound />}
            <Loading open={isLoading} />
        </Box>
    );
}

export default VerifyAccount;
