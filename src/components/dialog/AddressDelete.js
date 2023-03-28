import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import classnames from "classnames/bind";
import { useState } from "react";
import style from "./Dialog.module.scss";
const cx = classnames.bind(style);
function AddressDelete() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDelete = () => {

    };
    return (
        <Box className={cx("dialog-main")}>
            <Button
                disableRipple
                variant="outlined"
                className={cx("btn-delete")}
                onClick={handleClickOpen}
            >
                Xoá
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                className={cx("dialog-content")}
                PaperProps={{
                    style: {
                        maxWidth: "520px",
                        width: "520px",
                    },
                }}
            >
                <DialogTitle className={cx("dialog-title")}>Xoá địa chỉ</DialogTitle>
                <DialogContent>
                    <DialogContentText>Bạn có chắc muốn xoá địa chỉ này không?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        className={cx("btn-cancel")}
                        onClick={() => setOpen(false)}
                    >
                        Huỷ bỏ
                    </Button>
                    <Button variant="contained" onClick={handleDelete} className={cx("btn-truncate")}>
                        Xoá địa chỉ
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AddressDelete;
