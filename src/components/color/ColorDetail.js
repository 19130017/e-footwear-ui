import { Box, Grid } from "@mui/material";
import classnames from "classnames/bind";
import style from "./Color.module.scss";
const cx = classnames.bind(style);

function ColorDetail({ color, isCheck }) {
    const colorId = `color-${color}`;
    return (
        <Grid item xs={2}>
            <Box
                component={"input"}
                id={colorId}
                type="radio"
                name="color"
                value={color}
                hidden
                data-color={color}
                checked={isCheck}
                className={cx("color-checked")}
            />
            <Box
                component={"label"}
                htmlFor={colorId}
                sx={{ border: `2px solid ${color}` }}
                className={cx("color-detail")}
            >
                <Box sx={{ backgroundColor: color }} className={cx("color-bg")}></Box>
            </Box>
        </Grid>
    );
}

export default ColorDetail;
