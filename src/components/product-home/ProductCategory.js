import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { ProductSlide } from "../swiper";

function ProductCategory({ data }) {
    return (
        <Box className="container">
            <Typography
                variant="body1"
                sx={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "500" }}
            >
                Sản phẩm liên quan
            </Typography>
            <ProductSlide data={data} />
        </Box>
    );
}

export default ProductCategory;
