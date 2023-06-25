import { Button, Box } from "@mui/material";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import error from "~/assets/images/page_not_found.png";
function NotFound() {
    return (
        <Box className="flex flex-col justify-center w-full bg-white h-[80vh]  not-found">
            <Box className="flex justify-center p-10">
                <img className="w-[500px]" src={error} alt="404" />
            </Box>
            <Box className="flex justify-center">
                <Button component={Link} to={"/"} className="btn_back">
                    Quay lại trang chủ
                </Button>
            </Box>
        </Box>
    );
}
export default NotFound;
