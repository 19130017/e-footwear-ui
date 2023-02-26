import { Box, Typography } from "@mui/material";
import classNames from "classnames/bind";
import style from "./AccountHeader.module.scss";

const cx = classNames.bind(style);

function AccountHeader({ title, text }) {
    return (
        <Box className={cx("header-wrapper")}>
            <Typography variant="h5" className={cx("title")}>
                {title}
            </Typography>
            <Typography variant="body2" className={cx("text")}>
                {text}
            </Typography>
        </Box>
    );
}

export default AccountHeader;
