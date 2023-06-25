import { Box, Paper } from "@mui/material";
import classnames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAddresses } from "~/redux/address/addressSlice";
import { AddressAdd } from "../dialog";
import AccountHeader from "../header/AccountHeader";
import Loading from "../loading/Loading";
import style from "./Address.module.scss";
import AddressItem from "./AddressItem";

const cx = classnames.bind(style);

function Address() {
    const { addresses, isLoading, isChanged } = useSelector((state) => state.addressReducer);
    const { accountId, accessToken } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetAddresses({ accountId, accessToken }));
    }, [dispatch, isChanged]);

    return (
        <Paper className={cx("address")}>
            <AccountHeader
                title="Địa chỉ của tôi"
                text="Thêm địa chỉ mới của bạn, để chúng tôi có thể giao hàng."
            />

            <Box className={cx("content")}>
                <AddressAdd accountId={accountId} accessToken={accessToken} dispatch={dispatch} />

                <Box className={cx("address-list")}>
                    {addresses &&
                        addresses.map((item, index) => (
                            <AddressItem
                                key={index}
                                data={item}
                                accountId={accountId}
                                accessToken={accessToken}
                                dispatch={dispatch}
                            />
                        ))}
                </Box>
            </Box>
            <Loading open={isLoading} />
        </Paper>
    );
}

export default Address;
