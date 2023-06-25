import { Box } from "@mui/material";
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
        <Box className="flex items-center justify-center">
            {response?.success ? <Box className="h-screen"></Box> : <NotFound />}
            <Loading open={isLoading} />
        </Box>
    );
}

export default VerifyAccount;
