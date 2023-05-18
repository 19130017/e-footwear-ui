import { Box, Grid } from "@mui/material";
import classnames from "classnames/bind";
import style from "./Color.module.scss";
import { Link } from "react-router-dom";
const cx = classnames.bind(style);

function ColorDetail({ data, params }) {
    return (
        <Grid container spacing={2}>
            {data?.map((item, index) => (
                <Grid item xs={2} key={index}>
                    <Link
                        to={`/detail/${params.slug}/${item?.color.id}`}
                        className={cx(
                            "link",
                            `${item?.color.id == params.color_id ? "checked" : ""}`
                        )}
                    >
                        <Box
                            sx={{ backgroundColor: `${item?.color.codeColor}` }}
                            className={cx("color-bg")}
                        ></Box>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

export default ColorDetail;
