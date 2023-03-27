import style from "./ProductDetail.module.scss";
import * as React from "react";
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
const cx = classNames.bind(style);
function ProductDetail() {
    const [value, setValue] = React.useState(3); //default star is 3
    return (
        <Box>
            <Box sx={{ marginBottom: "6rem" }}>
                <Box className={cx("wrap-detail")}>
                    <Box className={cx("wrap-img")}>
                        <SlickDetail />
                    </Box>
                    <Box className={cx("wrap-content")}>
                        <Typography className={cx("title")}>
                            Giày Thể Thao Nam Hunter X - Dune OTP Real Black Edition
                        </Typography>
                        <Box className={cx("price")}>
                            <Box className={cx("sale-price")}>1,329,000 đ</Box>
                            <Box className={cx("pre-sale-price")}>1,500,000đ</Box>
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
                            <Box className={cx("state-content")}>Còn hàng (5)</Box>

                            {/* <Box
              className={cx("quantity-content")}
              sx={{ display: "none", color: "#ccc" }}
            >
              Hết hàng
            </Box> */}
                        </Box>
                        <Box className={cx("color")}>
                            <Box className={cx("color-title")}>
                                Màu sắc: <strong>Đỏ</strong>
                            </Box>
                            <Box className={cx("color-content")}>
                                <Grid container spacing={2}>
                                    <ColorDetail color={"red"} />
                                    <ColorDetail color={"purple"} />
                                </Grid>
                            </Box>
                        </Box>
                        <Box className={cx("size")}>
                            <Box className={cx("size-title")}>Kích thước:</Box>
                            <Box className={cx("size-content")}>
                                <Grid container spacing={2}>
                                    <Size size={38} />
                                    <Size size={39} />
                                    <Size size={40} />
                                    <Size size={41} />
                                    <Size size={42} />
                                    <Size size={43} />
                                    <Size size={44} />
                                    <Size size={45} />
                                </Grid>
                            </Box>
                        </Box>
                        <Box className={cx("wrap")}>
                            <Box className={cx("quantity-content")}>
                                <Box
                                    component={"button"}
                                    variant="outlined"
                                    className={cx("btn-change-quantity")}
                                >
                                    <RemoveIcon />
                                </Box>
                                <Box
                                    component={"input"}
                                    type="number"
                                    readOnly
                                    value={1}
                                    min={1}
                                    max={10}
                                    className={cx("quantity-buy")}
                                />
                                <Box
                                    component={"button"}
                                    variant="outlined"
                                    className={cx("btn-change-quantity")}
                                >
                                    <AddIcon />
                                </Box>
                            </Box>
                            <Button className={cx("buy-btn", "btn-red")}>Thêm vào giỏ</Button>
                        </Box>
                        {/* <Box className={cx("buy")}> */}
                        {/* <Button className={cx("buy-btn", "btn-red")}>Thêm vào giỏ</Button> */}
                        {/* <Button className={cx("buy-contact")}>
                                <Typography className={cx("sub-text")}>
                                    Tư vấn:
                                    <span style={{ color: "red", marginLeft: "5px" }}>
                                        0982377894
                                    </span>
                                </Typography>
                            </Button> */}
                        {/* </Box> */}
                        <Box className={cx("description")}>
                            <Box className={cx("description-title")}>Mô tả</Box>
                            <Box className={cx("description-content")}>
                                Đôi giày là phụ kiện thể hiện niềm đam mê và cá tính của người mang,
                                với thiết kế thời trang, năng động, trẻ trung phù hợp với mọi lứa
                                tuổi sẽ làm nổi bật lên cá tính, phong cách của bạn. Nhiều màu sắc,
                                mẫu để lựa chọn làm mới phong cách hàng ngày. Do màn hình và điều
                                kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh
                                lệch khoảng 3-5%. HB Fashion luôn mong muốn mang lại trải nghiệm tốt
                                nhất cho người dùng.
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={cx("wrap-new")}>
                    <ProductCategory />
                </Box>
                <Box className={cx("wrap-rate")}>
                    <Rate />
                </Box>

            </Box>

            <Box>
                <FooterGallery />
            </Box>
        </Box>
    );
}
export default ProductDetail;
