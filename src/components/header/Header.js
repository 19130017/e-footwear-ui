import { Box } from "@mui/material";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Header() {
    return (
        <Box className={cx("header")}>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <Link to="/account/profile">account</Link>
        </Box>
    );
}

export default Header;
