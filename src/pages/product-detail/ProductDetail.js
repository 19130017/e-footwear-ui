import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ColorDetail } from "~/components/color";
import FooterGallery from "~/components/footer-gallery";
import Size from "~/components/size";
import { DetailSlide } from "~/components/swiper";
import { addToCart } from "~/redux/cart/cartSlice";
import { fetchGetDetail } from "~/redux/detail/detailSlice";
import { fetchProductBySlugColor, fetchProductsBySlug } from "~/redux/product/productSlice";
import MySwal from "~/utils/MySwal";
import "./ProductDetail.scss";

function ProductDetail() {
    const params = useParams();
    const { products, product, isLoading } = useSelector((state) => state.productReducer);
    const detail = useSelector((state) => state.detailReducer.detail);
    const dispatch = useDispatch();
    const [currentSlug, setCurrentSlug] = useState("");
    const [currentSize, setCurrentSize] = useState(0);

    let [count, setCount] = useState(1);
    useEffect(() => {
        if (currentSlug !== params.slug) {
            setCurrentSlug(params.slug);
            dispatch(fetchProductsBySlug(params));
        }
        setCurrentSize(0);
        setCount(1);
        dispatch(fetchProductBySlugColor(params));
    }, [params]);

    const handleClick = (e) => {
        const value = Number(e.target.getAttribute("data-size"));
        setCurrentSize(value);
        const id = Number(e.target.getAttribute("data-id"));
        dispatch(fetchGetDetail({ ...params, size_id: id }));
    };

    const handleIncrease = (e) => {
        if (currentSize === 0) {
            return MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Vui lòng chọn kích thước của giày",
            });
        }
        return count < detail?.stockQuantity
            ? setCount(count + 1)
            : setCount(detail?.stockQuantity);
    };
    const handleDecrease = (e) => {
        if (currentSize === 0) {
            return MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Vui lòng chọn kích thước của giày",
            });
        }
        return count > 1 ? setCount(count - 1) : setCount(1);
    };

    const addCart = () => {
        if (currentSize === 0) {
            return MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Vui lòng chọn kích thước của giày",
            });
        }
        dispatch(
            addToCart({
                quantity: count,
                price: product.discountPrice,
                detail: {
                    id: detail.id,
                    size: detail.size.value,
                    product: {
                        id: product.id,
                        slug: product.slug,
                        name: product.name,
                        originPrice: product.originPrice,
                        discountPrice: product.discountPrice,
                        discountRate: product.discountRate,
                        color: {
                            id: product.color.id,
                            name: product.color.name,
                            codeColor: product.color.codeColor,
                        },
                        imageURL: product.images[0].imageURL,
                        stockQuantity: detail.stockQuantity,
                    },
                },
            })
        );
    };

    return (
        <Box>
            <Box sx={{ marginBottom: "6rem" }}>
                <Box className="wrap-detail flex-col lg:flex-row ">
                    <Box className="wrap-img block sm:w-[75%]  sm:mx-auto lg:w-full lg:m-[50px]  lg:basis-[50%] lg:sticky">
                        {!isLoading && <DetailSlide data={product?.images} />}
                    </Box>
                    <Box className="wrap-content">
                        <Typography className="title">{product?.name}</Typography>
                        <Box className="price lg:text-[30px]">
                            {product?.discountRate !== 0 && (
                                <Box className="sale-price">
                                    {product?.originPrice.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </Box>
                            )}
                            <Box className="pre-sale-price">
                                {product?.discountPrice.toLocaleString("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </Box>
                        </Box>
                        <Box className="evaluate">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Rating name="read-only" value={3} readOnly size="large" />
                                <Typography className="evaluate-content" component="legend">
                                    Đánh giá
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="state">
                            <Box className="state-title">Tình trạng:</Box>
                            {detail?.stockQuantity !== 0 ? (
                                <Box className="state-content">
                                    Còn hàng ({detail?.stockQuantity})
                                </Box>
                            ) : (
                                <Box className="state-content">Hết hàng</Box>
                            )}
                        </Box>
                        <Box className="color">
                            <Box className="color-title">
                                Màu sắc: <strong>{product?.color?.name}</strong>
                            </Box>
                            <Box className="color-content">
                                <ColorDetail data={products} params={params} />
                            </Box>
                        </Box>
                        <Box className="size">
                            <Box className="size-title">Kích thước:</Box>
                            <Box className="size-content">
                                {product?.details && (
                                    <Size
                                        data={product?.details}
                                        parentCallback={handleClick}
                                        value={currentSize}
                                    />
                                )}
                            </Box>
                        </Box>
                        <Box className="wrap">
                            <Box className="quantity-content">
                                <Box
                                    component={"button"}
                                    variant="outlined"
                                    className="btn-change-quantity"
                                    onClick={handleDecrease}
                                >
                                    <RemoveIcon />
                                </Box>
                                <Box className="quantity-buy">{count}</Box>
                                <Box
                                    component={"button"}
                                    variant="outlined"
                                    className="btn-change-quantity"
                                    onClick={handleIncrease}
                                >
                                    <AddIcon />
                                </Box>
                            </Box>
                            <Button className="buy-btn btn-red" onClick={addCart}>
                                Thêm vào giỏ
                            </Button>
                        </Box>

                        <Box className="description">
                            <Box className="description-title">Mô tả</Box>
                            <Box className="description-content">{product?.description}</Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="wrap-rate">{/* <Rate /> */}</Box>
                {/* <Box className="product-relationship")}>
                    <ProductCategory data={products} /
                </Box> */}
            </Box>

            <Box>
                <FooterGallery />
            </Box>
        </Box>
    );
}
export default ProductDetail;
