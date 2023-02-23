import { Box, Grid, Link } from "@mui/material";
import classNames from "classnames/bind";
import FullWidthHeader from "~/components/header/FullWidthHeader";
import style from "./FullWidthLayout.module.scss";
const cx = classNames.bind(style);
function FullWidthLayout({ children }) {
    return (
        <Box>
            <FullWidthHeader cx={cx} />

            <Box>{children}</Box>
        </Box>
    );
}

export default FullWidthLayout;
