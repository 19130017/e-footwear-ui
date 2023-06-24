
import { Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProfile } from "~/redux/customer/customerSlice";
import AccountHeader from "../header/AccountHeader";
import Loading from "../loading/Loading";
import SubProfile from "./SubProfile";

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
