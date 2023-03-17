import classNames from "classnames/bind";
import { Box, Typography } from "@mui/material";
import style from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function ProductCard(props) {
    return (
        <Box className={cx("wrap-card")}>
            <Link to={props.link} className={cx("link")}>
                <Box className={cx("card")}>
                    <Box className={cx("wrap-image")}>
                        <Box className={cx("sale")}>Sale</Box>
                        <Box className={cx("outer")}>
                            <img
                                className={cx("img")}
                                alt={props.name}
                                src={props.thumnailBefore}
                            />
                            <Box className={cx("inner")}>
                                <img
                                    className={cx("img")}
                                    src={props.thumnailAfter}
                                    alt={props.name}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={cx("content")}>
                    <Box className={cx("info")}>
                        <Typography className={cx("size")}>+{props.totalSize} size</Typography>
                        <Typography className={cx("color")}>+{props.totalColor} màu</Typography>
                    </Box>

                    <Box className={cx("title")}>{props.name}</Box>
                    <Box className={cx("price")}>
                        <Box className={cx("salePrice")}>{props.salePrice} đ</Box>
                        <Box className={cx("preSalePrice")}>{props.preSalePrice}đ</Box>
                        <Box className={cx("discount")}>-11%</Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
}
export default ProductCard;
