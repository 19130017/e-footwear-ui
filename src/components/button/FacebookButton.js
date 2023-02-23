import { Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

function FacebookButton({ cx }) {
    return (
        <Box sx={{ marginTop: "1.5rem" }}>
            <Button variant="contained" className={cx("btn-facebook")} fullWidth>
                Đăng nhập với Facebook <FacebookIcon sx={{ height: "2.4rem", width: "2.4rem", marginRight: "1rem" }} />
            </Button>
        </Box>
    );
}

export default FacebookButton;
