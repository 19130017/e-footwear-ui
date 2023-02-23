import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";

export function TitleFullWidth(props) {
    const { cx, title } = props;
    return (
        <Typography variant="h3" className={cx("title")}>
           {title}
        </Typography>
    );
}

function FullWidthHeader({ cx }) {
    return (
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}>
                <Link to="/" className={cx("link")}>
                    <img src={logo} alt="" className={cx("logo")} />
                </Link>
            </Grid>
        </Grid>
    );
}

export default FullWidthHeader;
