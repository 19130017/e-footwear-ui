import { Box } from "@mui/material";
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function Footer() {
    return <Box className={cx("footer")}>Footer</Box>;
}

export default Footer;
