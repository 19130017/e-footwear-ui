import { Box, Grid, Typography } from "@mui/material";
import style from "./Ads.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(style);

function Ads() {
    return (
        <Box component={"section"} className={cx("section-ads", "container")}>
            <Typography variant="h3" className={cx("title")}>
                Chúng tôi có gì mới
            </Typography>
            <Grid container spacing={1}>
                <Grid item sx={{ width: "calc(25% - 5px)" }}>
                    <Box className={cx("ads-wrapper")}>
                        <img
                            src="https://file.hstatic.net/1000230642/file/385x665_l_30bc4508f8bf4a5d92493189f5fd6988.jpg"
                            alt="ads"
                            className={cx("ads-img")}
                        />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={cx("ads-wrapper")}>
                        <img
                            src="https://file.hstatic.net/1000230642/file/795x665_46ed484a6c70459aa3bb54d88f0a2abb.jpg"
                            alt="ads"
                            className={cx("ads-img")}
                        />
                    </Box>
                </Grid>
                <Grid item sx={{ width: "calc(25% - 5px)" }}>
                    <Box className={cx("ads-wrapper")}>
                        <img
                            src="https://file.hstatic.net/1000230642/file/385x665_r_eb1943175a3b408cb2a17f98f4733cd8.jpg"
                            alt="ads"
                            className={cx("ads-img")}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Ads;
