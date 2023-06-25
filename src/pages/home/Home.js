import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
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
        <>
            {/* carousel bitis */}
            <SlideShow />
            {/* after sale  */}
            <AfterSale />
            {/* banner */}
            <Box component={"section"} className={"section hidden sm:flex"}>
                <Box className={"container mx-auto"}>
                    <Grid container spacing={1}>
                        {banner?.map((item, index) => (
                            <Grid item sm={4} key={index}>
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
        </>
    );
}
export default Home;
