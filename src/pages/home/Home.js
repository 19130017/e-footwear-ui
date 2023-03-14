import { Box, Grid } from "@mui/material";
import React from "react";
import style from "./Home.module.scss";
import classNames from "classnames/bind";
import MyCarousel from "~/components/carousel/MyCarousel";

const cx = classNames.bind(style);

function Home() {
  return (
    <Box className={cx("main")}>
        <MyCarousel>
        </MyCarousel>


        
    </Box>
  );
}
export default Home;
