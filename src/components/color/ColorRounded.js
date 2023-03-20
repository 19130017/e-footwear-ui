import { Box } from "@mui/material";
import classnames from "classnames/bind";
import style from "./Color.module.scss";
const cx = classnames.bind(style);

function ColorRounded({ nameColor }) {
    return <Box className={cx("color-rounded")} sx={{ backgroundColor: nameColor }}></Box>;
}

export default ColorRounded;