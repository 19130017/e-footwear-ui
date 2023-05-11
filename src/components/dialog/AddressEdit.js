import style from "./Dialog.module.scss";
import { Box, Button } from "@mui/material";
import classnames from "classnames/bind";
import { useState } from "react";
import DialogCustom from "./DialogCustom";
import { fetchGetAddresses, fetchUpdateAddress } from "~/redux/address/addressSlice";
const cx = classnames.bind(style);

function AddressEdit({ data, accountId, accessToken, dispatch }) {
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        setOpen(true);
    };
    const handleClose = (childData) => {
        setOpen(childData);
    };
    const handleSubmit = async (childData) => {
        const newAddress = {
            id: data.id,
            address: childData.address,
            fullName: childData.fullName,
            phone: childData.phone,
            email: childData.email,
            isDefault: childData.isDefault === undefined ? true : childData.isDefault,
            addresses: {
                districtId: childData.districtId,
                districtName: childData.districtName,
                provinceId: childData.provinceId,
                provinceName: childData.provinceName,
                wardId: childData.wardId,
                wardName: childData.wardName,
            },
        };
        await dispatch(fetchUpdateAddress({ newAddress, accessToken, accountId }));
    };
    return (
        <Box className={cx("dialog-main")}>
            <Button
                disableRipple
                variant="outlined"
                className={cx("btn-edit")}
                onClick={handleOpen}
            >
                Chỉnh sửa
            </Button>
            <DialogCustom
                open={open}
                parentCallbackClose={handleClose}
                parentCallbackSubmit={handleSubmit}
                data={data}
            />
        </Box>
    );
}

export default AddressEdit;
