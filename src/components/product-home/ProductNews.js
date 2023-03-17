import { Box, Grid } from "@mui/material";
import { productCardData } from "~/service/fakeData";
import SlickProduct from "../slick/SlickProduct";
function ProductNews() {
    return (
        <Box className="container">
            <SlickProduct data={productCardData} />
        </Box>
    );
}

export default ProductNews;
