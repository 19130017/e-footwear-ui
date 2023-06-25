import { Box, Typography } from "@mui/material";

function AccountHeader({ title, text }) {
    return (
        <Box className="pb-4 border-b border-solid border-gray">
            <Typography variant="h5" className="text-4xl text-black">
                {title}
            </Typography>
            <Typography variant="body2" className="text-2xl">
                {text}
            </Typography>
        </Box>
    );
}

export default AccountHeader;
