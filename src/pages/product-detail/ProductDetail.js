import style from "./ProductDetail.module.scss";
import * as React from "react";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import classNames from "classnames/bind";
import Rating from "@mui/material/Rating";
import MySlider from "~/components/slider/MySlider";
const cx = classNames.bind(style);
function ProductDetail() {
  const [value, setValue] = React.useState(3); //default star is 3
  return (
    <Box>
      <Box className={cx("wrap-detail")}>
        <Box className={cx("wrap-img")}>
          <MySlider className={cx("slider")} />
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
          <Box className={cx("quantity")}>
            <Box className={cx("quantity-title")}>Tình trạng:</Box>
            <Box className={cx("quantity-content")}>Còn hàng (5)</Box>
            {/* <Box
              className={cx("quantity-content")}
              sx={{ display: "none", color: "#ccc" }}
            >
              Hết hàng
            </Box> */}
          </Box>
          <Box className={cx("size")}>
            <Box className={cx("size-title")}>Kích thước:</Box>
            <Box className={cx("size-content")}>
              <Grid container spacing={10}>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    36
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    37
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    38
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    39
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    40
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    41
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    42
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    className={cx("size-item")}
                    size="medium"
                    fullWidth="true"
                    variant="text"
                  >
                    43
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className={cx("quantity")}>
            <Input
              sx={{ fontSize: "20px" }}
              className={cx("minus", "is-form")}
              type="button"
              value="-"
              disableUnderline="true"
            />
            <input
              aria-label="quantity"
              className={cx("input-qty")}
              max="30"
              min="1"
              name=""
              type="number"
              value="1"
              disableUnderline="true"
            />
            <Input
              className={cx("plus", "is-form")}
              type="button"
              value="+"
              sx={{ fontSize: "20px" }}
              disableUnderline="true"
            />
          </Box>
          <Box className={cx("buy")}>
            <Button fullWidth="true" className={cx("buy-btn")}>
              <Typography className={cx("sub-text")}>Thêm vào giỏ</Typography>
            </Button>
            <Button fullWidth="true" className={cx("buy-contact")}>
              <Typography className={cx("sub-text")}>
                Tư vấn:{" "}
                <span style={{ color: "red", marginLeft: "5px" }}>
                  0982377894
                </span>
              </Typography>
            </Button>
          </Box>
          <Box className={cx("description")}>
            <Box className={cx("description-title")}>Mô tả</Box>
            <Box className={cx("description-content")}>
              Đôi giày là phụ kiện thể hiện niềm đam mê và cá tính của người
              mang, với thiết kế thời trang, năng động, trẻ trung phù hợp với
              mọi lứa tuổi sẽ làm nổi bật lên cá tính, phong cách của bạn. Nhiều
              màu sắc, mẫu để lựa chọn làm mới phong cách hàng ngày. Do màn hình
              và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có
              thể chênh lệch khoảng 3-5%. HB Fashion luôn mong muốn mang lại
              trải nghiệm tốt nhất cho người dùng.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={cx("wrap-new")}>
      </Box>
    </Box>
  );
}
export default ProductDetail;
