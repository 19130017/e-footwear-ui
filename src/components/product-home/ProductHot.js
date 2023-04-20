import { Box } from "@mui/material";
import { ProductSlide } from "../swiper";

function ProductHot({ data }) {
    return (
        <Box className="container">
            <ProductSlide data={data} />
        </Box>
    );
}
export default ProductHot;
