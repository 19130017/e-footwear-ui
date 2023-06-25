import { Box } from "@mui/material";
import classnames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetFooter } from "~/redux/gallery/gallerySlice";
import style from "./FooterGallery.module.scss";
const cx = classnames.bind(style);

function FooterGalleryItem(props) {
    return (
        <Box className={"group"}>
            <Link
                to={props?.gallery?.link}
                target="_blank"
                className={cx("gallery-link", "block relative no-underline overflow-hidden transition-all duration-500 bg-transparent")}
            >
                <img
                    src={props?.gallery?.imageURL}
                    alt={props?.gallery?.typeGallery?.typeName}
                    className={"group-hover:scale-105 transform transition-all ease-in-out duration-500"}
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
        <Box component={"section"} className={"hidden md:block"}>
            <Box className={"flex"}>
                {footer?.map((item, index) => (
                    <FooterGalleryItem key={index} gallery={item} />
                ))}
            </Box>
        </Box>
    );
}

export default FooterGallery;
