import { Box } from "@mui/material";
import style from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import Header from "~/components/header";
import Footer from "~/components/footer";
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
