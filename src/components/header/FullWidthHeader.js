import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";

function TitleFullWidth(props) {
    const { title } = props;
    return (
        <Typography variant="h3" className="text-5xl font-bold text-center mb-8">
            {title}
        </Typography>
    );
}

function FullWidthHeader({ cx }) {
    return (
        <Box className="container">
            <Link to="/" className="block no-underline">
                <img src={logo} alt="" className="w-60" />
            </Link>
        </Box>
    );
}

export { FullWidthHeader, TitleFullWidth };
