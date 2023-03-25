import { Box } from "@mui/material";
import { productCardData } from "~/service/fakeData";
import SlickProduct from "../slick/SlickProduct";

function ProductHot({}) {
    return (
        <Box className="container">
            <SlickProduct data={productCardData} />
        </Box>
    );
}
export default ProductHot;
