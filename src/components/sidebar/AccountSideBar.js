import {
    Avatar,
    Box,
    Collapse,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import classNames from "classnames/bind";
import style from "./AccountSideBar.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import avatar from "~/assets/images/avatar.png";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const cx = classNames.bind(style);
function SideBar() {
    const location = useLocation().pathname;
    const [active, setActive] = useState(0);
    useEffect(() => {
        if (location.includes("profile")) {
            setActive(0);
        } else if (location.includes("change-password")) {
            setActive(1);
        } else if (location.includes("address")) {
            setActive(2);
        } else if (location.includes("purchase")) {
            setActive(3);
        }
        console.log("he");
    }, [location]);
    return (
        <Paper className={cx("side-bar")}>
            <List className={cx("list")}>
                <Box
                    component={Link}
                    to={"/account/profile"}
                    className={cx("item", `${active === 0 ? "active" : ""}`)}
                >
                    <Typography variant="h6" className={cx("text")}>
                        Thông tin cá nhân
                    </Typography>
                </Box>

                <Box
                    component={Link}
                    to={"/account/change-password"}
                    className={cx("item", `${active === 1 ? "active" : ""}`)}
                >
                    <Typography variant="h6" className={cx("text")}>
                        Thay đổi mật khẩu
                    </Typography>
                </Box>

                <Box
                    component={Link}
                    to={"/account/address"}
                    className={cx("item", `${active === 2 ? "active" : ""}`)}
                >
                    <Typography variant="h6" className={cx("text")}>
                        Địa chỉ
                    </Typography>
                </Box>
                <Box
                    component={Link}
                    to={"/account/purchase"}
                    className={cx("item", `${active === 3 ? "active" : ""}`)}
                >
                    <Typography variant="h6" className={cx("text")}>
                        Lịch sử mua hàng
                    </Typography>
                </Box>
            </List>
        </Paper>
    );
}

export default SideBar;
