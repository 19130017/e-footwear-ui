import style from "./Dialog.module.scss";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import DialogCustom from "./DialogCustom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateAddress } from "~/redux/address/addressSlice";
import Loading from "../loading/Loading";

const cx = classnames.bind(style);

function AddressAdd() {
    const [open, setOpen] = useState(false);
    const { accountId, accessToken } = useSelector((state) => state.authReducer);
    const { isLoading } = useSelector((state) => state.addressReducer);
    const dispatch = useDispatch();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (childData) => {
        setOpen(childData);
    };
    const handleSubmit = (childData) => {
        const newAddress = {
            address: childData.address,
            fullName: childData.fullName,
            phone: childData.phone,
            email: childData.email,
            isDefault: childData.isDefault,
            addresses: {
                districtId: childData.districtId,
                districtName: childData.districtName,
                provinceId: childData.provinceId,
                provinceName: childData.provinceName,
                wardId: childData.wardId,
                wardName: childData.wardName,
            },
        };
        dispatch(fetchCreateAddress({ newAddress, accessToken, accountId }));
    };

    return (
        <Box className={cx("dialog-main")}>
            <Button className={cx("btn-add-address")} disableRipple onClick={handleOpen}>
                <AddIcon className={cx("icon-add")} />
                Thêm địa chỉ mới
            </Button>
            <DialogCustom
                open={open}
                parentCallbackClose={handleClose}
                parentCallbackSubmit={handleSubmit}
            />
            <Loading open={isLoading} />
        </Box>
    );
}

export default AddressAdd;
