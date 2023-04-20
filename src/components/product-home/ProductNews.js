import { Box } from "@mui/material";
import { ProductSlide } from "../swiper";
function ProductNews({data}) {
    return (
        <Box className="container">
             <ProductSlide data={data} />
        </Box>
    );
}

export default ProductNews;
