import { Box } from "@mui/material";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./FooterGallery.module.scss";
import { fetchGetFooter } from "~/redux/gallery/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const cx = classnames.bind(style);
function FooterGalleryItem(props) {
    return (
        <Box className={cx("gallery-item")}>
            <Link to={props?.gallery?.link} target="_blank" className={cx("gallery-link")}>
                <img
                    src={props?.gallery?.imageURL}
                    alt={props?.gallery?.typeGallery?.typeName}
                    className={cx("gallery-image")}
                />
            </Link>
        </Box>
    );
}

function FooterGallery() {
    const footer = useSelector((state) => state.galleryReducer.footer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetFooter());
    }, []);
    return (
        <Box component={"section"} className={cx("section-footer-gallery")}>
            <Box className={cx("gallery-list")}>
                {footer?.map((item, index) => (
                    <FooterGalleryItem key={index} gallery={item} />
                ))}
            </Box>
        </Box>
    );
}

export default FooterGallery;
