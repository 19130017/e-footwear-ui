import { Box, Grid } from "@mui/material";
import React from "react";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
// components
import { MyCarousel, AfterSaleSlider } from "~/components/slick";
import Banner from "~/components/banner";
import { TabHome } from "~/components/tab";
import Collection from "~/components/collection";
import Ads from "~/components/ads";
import HomeMarquee from "~/components/marquee";
import FooterGallery from "~/components/footer-gallery";

//

import { bannerData } from "~/service/fakeData";
const cx = classNames.bind(style);

function Home() {
    return (
        <Box className={cx("main")}>
            {/* carousel bitis */}
            <MyCarousel />
            {/* after sale  */}
            <Box className="container">
                <Box component={"section"} className={cx("section-after-sale")}>
                    <AfterSaleSlider />
                </Box>
            </Box>
            {/* banner */}
            <Box className="container">
                <Box component={"section"} className={cx("section-banner")}>
                    <Grid container spacing={1}>
                        {bannerData.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <Banner image={item.image} title={item.title} url={item.url} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            {/* tabs: bán chạy & sp mới, render 10-20sp */}
            <TabHome />
            {/* banner */}
            <Ads />
            {/* list collection + 8sp + xem them*/}
            <Collection />

            <HomeMarquee />

            <FooterGallery />
        </Box>
    );
}
export default Home;
