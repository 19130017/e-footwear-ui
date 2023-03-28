import style from "./Dialog.module.scss";
import { Box, Button } from "@mui/material";
import classnames from "classnames/bind";
import { useState } from "react";
import DialogCustom from "./DialogCustom";
const cx = classnames.bind(style);

function AddressEdit({ data }) {
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
    console.log(data);
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
