import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import classnames from "classnames/bind";
import { useState } from "react";
import style from "./Dialog.module.scss";
import { fetchDeleteAddress, fetchGetAddresses } from "~/redux/address/addressSlice";
const cx = classnames.bind(style);
function AddressDelete({ data, accountId, accessToken, dispatch }) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDelete = async (e) => {
        const id = Number.parseInt(e.target.getAttribute("data-id"));
        await dispatch(fetchDeleteAddress({ id, accessToken }));
        await dispatch(fetchGetAddresses({ accountId, accessToken }));

        setOpen(!open);
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
                    <DialogContentText className={cx("dialog-subtitle")}>
                        Bạn có chắc muốn xoá địa chỉ này không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Box className={cx("dialog-actions")}>
                        <Button
                            variant="outlined"
                            className={cx("btn-cancel")}
                            onClick={() => setOpen(false)}
                        >
                            Huỷ bỏ
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(e) => handleDelete(e)}
                            className={cx("btn-truncate")}
                            data-id={data}
                        >
                            Xoá địa chỉ
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AddressDelete;
