import style from "./Dialog.module.scss";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import classnames from "classnames/bind";
import { useState } from "react";
import DialogCustom from "./DialogCustom";

const cx = classnames.bind(style);

function AddressAdd() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (childData) => {
        setOpen(childData);
    };
    const handleSubmit = (childData) => {
        //
        console.log(childData);
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
