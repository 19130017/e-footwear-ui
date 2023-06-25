import { Box } from "@mui/material";
import Footer from "~/components/footer/Footer";
import { FullWidthHeader } from "~/components/header/FullWidthHeader";
function FullWidthLayout({ children }) {
    return (
        <Box>
            <FullWidthHeader />
            <Box className="pt-12">{children}</Box>
            <Footer />
        </Box>
    );
}

export default FullWidthLayout;
