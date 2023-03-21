import { Box } from "@mui/material";
import Slider from "react-slick";
import style from "./Slick.module.scss";
import classnames from "classnames/bind";
import { dataSliderExample } from "~/assets/dataSlider/dataSlider";

const cx = classnames.bind(style);

function DetailSlider({ data }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        customPaging: (i) => {
            return <img src={dataSliderExample[i].linkImage} alt={dataSliderExample[i].name} />;
        },
    };

    return (
        <Box className={cx("main")}>
            <Slider {...settings}>
                {dataSliderExample.map((item, index) => (
                    <Box className={cx("card")} key={index}>
                        <img className={cx("picture")} src={item.linkImage} alt={index} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default DetailSlider;
