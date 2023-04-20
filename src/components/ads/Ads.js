import { Box, Grid, Typography } from "@mui/material";
import style from "./Ads.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(style);

function Ads({ data }) {
    const image1 = data?.[0]?.imageURL;
    const image2 = data?.[1]?.imageURL;
    const image3 = data?.[2]?.imageURL;
    return (
        <Box component={"section"} className={cx("section-ads", "container")}>
            <Typography variant="h3" className={cx("title")}>
                Chúng tôi có gì mới
            </Typography>
            <Grid container spacing={1}>
                {data?.map((item, index) => {
                    if (index === 0) {
                        return (
                            <Grid key={index} item sx={{ width: "calc(25% - 5px)" }}>
                                <Box className={cx("ads-wrapper")}>
                                    <img
                                        alt={item.typeGallery.typeName}
                                        className={cx("ads-img")}
                                        src={item.imageURL}
                                    />
                                </Box>
                            </Grid>
                        );
                    } else if (index === 1) {
                        return (
                            <Grid key={index} item xs={6}>
                                <Box className={cx("ads-wrapper")}>
                                    <img
                                        src={item.imageURL}
                                        alt={item.typeGallery.typeName}
                                        className={cx("ads-img")}
                                    />
                                </Box>
                            </Grid>
                        );
                    } else if (index === 2) {
                        return (
                            <Grid key={index} item sx={{ width: "calc(25% - 5px)" }}>
                                <Box className={cx("ads-wrapper")}>
                                    <img
                                        src={item.imageURL}
                                        alt={item.typeGallery.typeName}
                                        className={cx("ads-img")}
                                    />
                                </Box>
                            </Grid>
                        );
                    }
                })}
            </Grid>
        </Box>
    );
}

export default Ads;
