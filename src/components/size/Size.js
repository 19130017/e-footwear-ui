import { Grid } from "@mui/material";
import classnames from "classnames/bind";
import style from "./Size.module.scss";

const cx = classnames.bind(style);

function Size(props) {
    return (
        <Grid container>
            {props.data.map((item, index) => (
                <Grid
                    item
                    xs={2}
                    key={index}
                    className={cx(
                        "size-wrapper",
                        `${props?.value === item.size.value ? "checked" : ""}`                       
                    )}
                    onClick={(e) => props.parentCallback(e)}
                    data-size={item.size.value}
                    data-id={item.size.id}
                >
                    {item.size.value}
                </Grid>
            ))}
        </Grid>
    );
}
export default Size;
