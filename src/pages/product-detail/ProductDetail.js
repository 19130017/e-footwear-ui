import style from "./ProductDetail.module.scss";
import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material";
import classNames from "classnames/bind";
import Rating from "@mui/material/Rating";
import Size from "~/components/size";
import FooterGallery from "~/components/footer-gallery";
import { ProductCategory } from "~/components/product-home";
import { ColorDetail } from "~/components/color";
import { SlickDetail } from "~/components/slick";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Rate from "~/components/rate/Rate";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDeferredValue, useEffect, useState } from "react";
import { fetchProductBySlugColor, fetchProductsBySlug } from "~/redux/product/productSlice";
import { fetchGetDetail } from "~/redux/detail/detailSlice";

const cx = classNames.bind(style);

function ProductDetail() {
    const [value, setValue] = useState(3);
    const params = useParams();
    const product = useSelector((state) => state.productReducer.product);
    const products = useSelector((state) => state.productReducer.products);
    const detail = useSelector((state) => state.detailReducer.detail);
    const dispatch = useDispatch();
    const [currentSlug, setCurrentSlug] = useState("");
    const [currentSize, setCurrentSize] = useState("0");
    let [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if (currentSlug !== params.slug) {
            setCurrentSlug(params.slug);
            dispatch(fetchProductsBySlug(params));
        }
        setCurrentSize("0");
        setQuantity(null)
        dispatch(fetchProductBySlugColor(params));
    }, [params]);

    const handleClick = (e) => {
        const value = e.target.getAttribute("data-size");
        setCurrentSize(value);
        const id = e.target.getAttribute("data-id");
        dispatch(fetchGetDetail({ ...params, size_id: id }));
    };

    const handleIncrease = (e) => {
        if (detail == null) alert("Vui lòng chọn kích thước của giày");
        if (quantity !== detail?.stockQuantity) setQuantity(() => quantity++);
    };

    const handleDecrease = (e) => {
        if (detail == null) alert("Vui lòng chọn kích thước của giày");
        if (quantity > 1) setQuantity(() => quantity--);
    };
    return (
        <Box>
            <Box sx={{ marginBottom: "6rem" }}>
                <Box className={cx("wrap-detail")}>
                    <Box className={cx("wrap-img")}>
                        <SlickDetail data={product?.images} />
                    </Box>
                    <Box className={cx("wrap-content")}>
                        <Typography className={cx("title")}>{product?.name}</Typography>
                        <Box className={cx("price")}>
                            {product?.discountRate !== 0 && (
                                <Box className={cx("sale-price")}>
                                    {product?.originPrice.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Box>
                            )}
                            <Box className={cx("pre-sale-price")}>
                                {product?.discountPrice.toLocaleString("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </Box>
                        </Box>
                        <Box className={cx("evaluate")}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Rating name="read-only" value={value} readOnly size="large" />
                                <Typography className={cx("evaluate-content")} component="legend">
                                    Đánh giá
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={cx("state")}>
                            <Box className={cx("state-title")}>Tình trạng:</Box>
                            {detail?.stockQuantity !== 0 ? (
                                <Box className={cx("state-content")}>
                                    Còn hàng ({detail?.stockQuantity})
                                </Box>
                            ) : (
                                <Box
                                    className={cx("quantity-content")}
                                    sx={{ display: "none", color: "#ccc" }}
                                >
                                    Hết hàng
                                </Box>
                            )}
                        </Box>
                        <Box className={cx("color")}>
                            <Box className={cx("color-title")}>
                                Màu sắc: <strong>{product?.color?.name}</strong>
                            </Box>
                            <Box className={cx("color-content")}>
                                <ColorDetail data={products} params={params} />
                            </Box>
                        </Box>
                        <Box className={cx("size")}>
                            <Box className={cx("size-title")}>Kích thước:</Box>
                            <Box className={cx("size-content")}>
                                {product?.details && (
                                    <Size
                                        data={product?.details}
                                        parentCallback={handleClick}
                                        value={currentSize}
                                    />
                                )}
                            </Box>
                        </Box>
                        <Box className={cx("wrap")}>
                            <Box className={cx("quantity-content")}>
                                <Box
                                    component={"button"}
                                    variant="outlined"
                                    className={cx("btn-change-quantity")}
                                    onClick={handleDecrease}
                                >
                                    <RemoveIcon />
                                </Box>
                                <Box
                                    component={"input"}
                                    type="number"
                                    readOnly
                                    value={quantity}
                                    min={1}
                                    max={detail ? detail?.stockQuantity : 10}
                                    className={cx("quantity-buy")}
                                />
                                <Box
                                    component={"button"}
                                    variant="outlined"
                                    className={cx("btn-change-quantity")}
                                    onClick={handleIncrease}
                                >
                                    <AddIcon />
                                </Box>
                            </Box>
                            <Button className={cx("buy-btn", "btn-red")}>Thêm vào giỏ</Button>
                        </Box>

                        <Box className={cx("description")}>
                            <Box className={cx("description-title")}>Mô tả</Box>
                            <Box className={cx("description-content")}>{product?.description}</Box>
                        </Box>
                    </Box>
                </Box>

                <Box className={cx("wrap-rate")}>{/* <Rate /> */}</Box>
                <Box className={cx("wrap-new")}>{/* <ProductCategory /> */}</Box>
            </Box>

            <Box>
                <FooterGallery />
            </Box>
        </Box>
    );
}
export default ProductDetail;
