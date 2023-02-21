import { Box } from "@mui/material";
import style from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Header() {
    return <Box className={cx("header")}>Header</Box>;
}

export default Header;
