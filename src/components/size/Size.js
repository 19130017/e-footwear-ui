import { Box, Grid, TextField } from "@mui/material";
import classnames from "classnames/bind";
import { useRef } from "react";
import style from "./Size.module.scss";

const cx = classnames.bind(style);

function Size({ size, isCheck }) {
    const sizeId = `size-${size}`;

    return (
        <Grid item xs={2}>
            <Box
                component={"input"}
                id={sizeId}
                type="radio"
                name="size"
                value={size}
                hidden
                data-size={size}
                className={cx("size-checked")}
                checked={isCheck}
            />
            <Box component={"label"} htmlFor={sizeId} className={cx("label-size")}>
                {size}
            </Box>
        </Grid>
    );
}
export default Size;
