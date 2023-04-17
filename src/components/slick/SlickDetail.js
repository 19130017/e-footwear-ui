import { Box } from "@mui/material";
import Slider from "react-slick";
import style from "./Slick.module.scss";
import classnames from "classnames/bind";
import { detailSlide } from "~/service/fakeData";
const cx = classnames.bind(style);

function SlickDetail({ data }) {
    const settings = {
        infinite: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        variableWidth: true,
        customPaging: (i) => {
            return <img src={data?.[i].imageURL} alt={"test"} />;
        },
    };

    return (
        <Box className={cx("main")}>
            <Slider {...settings}>
                {data?.map((item, index) => (
                    <Box className={cx("card")} key={index}>
                        <img
                            className={cx("picture")}
                            src={`${item.imageURL}`}
                            alt={"test"}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default SlickDetail;
