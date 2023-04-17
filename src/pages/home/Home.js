import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchGetGalleriesByType } from "~/redux/gallery/gallerySlice";
const cx = classNames.bind(style);

function Home() {
    const galleries = useSelector((state) => state.galleryReducer.galleries);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetGalleriesByType("banner"));
        dispatch(fetchGetGalleriesByType("slide"));
        dispatch(fetchGetGalleriesByType("ads"));
        dispatch(fetchGetGalleriesByType("collection"));
    }, []);
    return (
        <Box className={cx("main")}>
            {/* carousel bitis */}
            <MyCarousel data={galleries?.slide} />
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
                        {galleries?.banner?.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <Banner image={item.imageURL} title={item.typeGallery.typeName} url={"/collection/hunter"} />
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
            <Collection data={galleries?.collection}/>

            <HomeMarquee />

            <FooterGallery />
        </Box>
    );
}
export default Home;
