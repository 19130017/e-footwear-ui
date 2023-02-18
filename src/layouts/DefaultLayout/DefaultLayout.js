import { Box } from "@mui/material";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <Box className={cx("main")}>
            <Header />
            <Box className={cx("wrapper")}>{children}</Box>
            <Footer />
        </Box>
    );
}

export default DefaultLayout;
