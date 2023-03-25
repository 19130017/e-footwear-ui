import ArrowLefIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Box, Button } from "@mui/material";
import style from "./Slick.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(style);

function NextArrowProduct({ className, to, onClick }) {
    return (
        <Button
            onClick={onClick}
            className={`${className}`}
            aria-label={to}
            sx={{
                display: "inline-block",
                zIndex: 2,
                minWidth: "30px",
                height: "30px",
                padding: 0,
                position: "absolute",
                right: "-15px",
                "&::before": { display: "none" },
            }}
        >
            <ArrowRightIcon sx={{ height: "3rem", width: "3rem", color: "#000" }} />
        </Button>
    );
}
function PrevArrowProduct({ className, to, onClick }) {
    return (
        <Button
            onClick={onClick}
            className={`${className}`}
            aria-label={to}
            sx={{
                display: "inline-block",
                zIndex: 2,
                minWidth: "30px",
                height: "30px",
                padding: 0,
                position: "absolute",
                left: "-15px",
                "&::before": { display: "none" },
            }}
        >
            <ArrowLefIcon sx={{ height: "3rem", width: "3rem", color: "#000" }} />
        </Button>
    );
}
function NextArrowAfterSale({ className, to, onClick }) {
    return (
        <Button
            onClick={onClick}
            className={`${className}`}
            aria-label={to}
            sx={{ zIndex: 2, position: "absolute", right: "20%", "&::before": { display: "none" } }}
        >
            <ArrowRightIcon sx={{ height: "3rem", width: "3rem", color: "#000" }} />
        </Button>
    );
}

function PrevArrowAfterSale({ className, to, onClick }) {
    return (
        <Button
            onClick={onClick}
            className={`${className}`}
            aria-label={to}
            sx={{ zIndex: 2, position: "absolute", left: "20%", "&::before": { display: "none" } }}
        >
            <ArrowLefIcon sx={{ height: "3rem", width: "3rem", color: "#000" }} />
        </Button>
    );
}

export { NextArrowProduct, PrevArrowProduct, NextArrowAfterSale, PrevArrowAfterSale };
