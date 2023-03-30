import { Box, Grid, Link } from "@mui/material";
import classNames from "classnames/bind";
import Footer from "~/components/footer/Footer";
import FullWidthHeader from "~/components/header/FullWidthHeader";
import style from "./FullWidthLayout.module.scss";
const cx = classNames.bind(style);
function FullWidthLayout({ children }) {
    return (
        <Box>
            <FullWidthHeader cx={cx} />

            <Box>{children}</Box>
            <Footer />
        </Box>
    );
}

export default FullWidthLayout;
