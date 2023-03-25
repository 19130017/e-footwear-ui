import { Box } from "@mui/material";
import SlickProduct from "../slick/SlickProduct";
import { productCardData } from "~/service/fakeData";

function ProductCategory() {
    return (
        <Box className="container">
            <SlickProduct data={productCardData} />
        </Box>
    );
}

export default ProductCategory;