import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
// components
import Banner from "~/components/banner";
import { TabHome } from "~/components/tab";
import Collection from "~/components/collection";
import Ads from "~/components/ads";
import HomeMarquee from "~/components/marquee";
import FooterGallery from "~/components/footer-gallery";

import { useDispatch, useSelector } from "react-redux";
import { fetchGetAds, fetchGetBanners, fetchGetCollections } from "~/redux/gallery/gallerySlice";
import { SlideShow } from "~/components/swiper";
import AfterSale from "~/components/swiper/AfterSale";
const cx = classNames.bind(style);

function Home() {
    const ads = useSelector((state) => state.galleryReducer.ads);
    const banner = useSelector((state) => state.galleryReducer.banner);
    const collection = useSelector((state) => state.galleryReducer.collection);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetAds());
        dispatch(fetchGetBanners());
        dispatch(fetchGetCollections());
    }, []);
    return (
        <Box className={cx("main")}>
            {/* carousel bitis */}
            <Box className={cx("slide-show")}>
                <SlideShow />
            </Box>
            {/* after sale  */}
            <Box className="container">
                <Box component={"section"} className={cx("section-after-sale")}>
                    <AfterSale />
                </Box>
            </Box>
            {/* banner */}
            <Box className="container">
                <Box component={"section"} className={cx("section-banner")}>
                    <Grid container spacing={1}>
                        {banner?.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <Banner
                                    image={item.imageURL}
                                    title={item.typeGallery.typeName}
                                    url={item.link}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            {/* tabs: bán chạy & sp mới, render 10-20sp */}
            <TabHome />
            {/* banner */}
            <Ads data={ads} />
            {/* list collection + 8sp + xem them*/}
            <Collection data={collection} />

            <HomeMarquee />

            <FooterGallery />
        </Box>
    );
}
export default Home;
