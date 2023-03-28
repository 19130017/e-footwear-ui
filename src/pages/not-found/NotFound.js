import { Button, Box } from "@mui/material";
import style from "./NotFound.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import error from "~/assets/images/page_not_found.png";
const cx = classNames.bind(style);
function NotFound() {
    return (
        <Box className={cx("error")}>
            <Box className={cx("wrap-error_image")} >
                <img className={cx("error_image")} src={error} alt="404" />
            </Box>
            <Box className={cx("wrap-button")}>
            <Button component={Link}
                to={"/"} className={cx("back")}>Quay lại trang chủ</Button>
            </Box>
           
        </Box>
    );
}
export default NotFound;