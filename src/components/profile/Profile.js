
import AccountHeader from "../header/AccountHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetProfile } from "~/redux/customer/customerSlice";
import Loading from "../loading/Loading";
import SubProfile from "./SubProfile";
import { Paper } from "@mui/material";

function Profile() {
    const { customer, isLoading } = useSelector((state) => state.customerReducer);
    const dispatch = useDispatch();
    const { accountId, accessToken } = useSelector((state) => state.authReducer);

    useEffect(() => {
        dispatch(fetchGetProfile({ accessToken, accountId }));
    }, [accessToken, accountId, dispatch]);

    return (
        <Paper className="bg-white mx-4 p-8 rounded-2xl profile-section">
            <AccountHeader
                title="Thông tin cá nhân"
                text="Quản lý thông tin hồ sơ để bảo mật tài khoản"
            />
            {customer && <SubProfile customer={customer} />}
            <Loading open={isLoading} />
        </Paper>
    );
}

export default Profile;
