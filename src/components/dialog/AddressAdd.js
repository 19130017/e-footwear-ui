import style from "./Dialog.module.scss";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import classnames from "classnames/bind";
import { useState } from "react";
import DialogCustom from "./DialogCustom";
import { fetchCreateAddress, fetchGetAddresses } from "~/redux/address/addressSlice";

const cx = classnames.bind(style);

function AddressAdd({ accountId, accessToken, dispatch }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (childData) => {
        setOpen(childData);
    };
    const handleSubmit = async (childData) => {
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
        await dispatch(fetchCreateAddress({ newAddress, accessToken, accountId }));
        
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
        </Box>
    );
}

export default AddressAdd;
