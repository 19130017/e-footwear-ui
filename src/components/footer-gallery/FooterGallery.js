import { Box, Grid } from "@mui/material";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import { galleryData } from "~/service/fakeData";
import style from "./FooterGallery.module.scss";
const cx = classnames.bind(style);
function FooterGalleryItem(props) {
    return (
        <Box className={cx("gallery-item")}>
            <Link to={props.link} target="_blank" className={cx("gallery-link")}>
                <img src={props.image} alt={props.name} className={cx("gallery-image")} />
            </Link>
        </Box>
    );
}

function FooterGallery() {
    return (
        <Box component={"section"} className={cx("section-footer-gallery")}>
            <Box className={cx("gallery-list")}>
                {galleryData.map((item, index) => (
                    <FooterGalleryItem
                        key={index}
                        link={item.link}
                        image={item.image}
                        name={item.name}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default FooterGallery;
