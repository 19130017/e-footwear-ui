import { Box } from "@mui/material";
import classNames from "classnames/bind";
import Footer from "~/components/footer";
import Header from "~/components/header";
import style from "./MainLayout.module.scss";
const cx = classNames.bind(style);

function MainLayout({ children }) {
    return (
        <Box className={cx("main")}>
            <Header />
            <Box className={cx("wrapper")}>{children}</Box>
            <Footer />
        </Box>
    );
}

export default MainLayout;
