import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import classnames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import style from "./Dropdown.module.scss";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ProfileIcon from "@mui/icons-material/AdminPanelSettings";
import { useDispatch } from "react-redux";
import { fetchLogout } from "~/redux/auth/authSlice";

const cx = classnames.bind(style);
function DropdownAccount({ isLogin }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = async () => {
        await dispatch(fetchLogout());
        navigate("/auth/sign-in");
    };
    return (
        <List className={cx("list")}>
            {isLogin ? (
                <>
                    <Link to={"/account/profile"} className={cx("item-link")}>
                        <ListItem>
                            <ListItemText className={cx("item-text")}>
                                <ProfileIcon className={cx("icon")} /> Thông tin cá nhân
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </Link>                    
                    <Box className={cx("item-link")} onClick={handleClick}>
                        <ListItem>
                            <ListItemText className={cx("item-text")}>
                                <LogoutIcon className={cx("icon")} />
                                Đăng Xuất
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </Box>
                </>
            ) : (
                <>
                    <Link to={"/auth/sign-in"} className={cx("item-link")}>
                        <ListItem>
                            <ListItemText className={cx("item-text")}>
                                <LoginIcon className={cx("icon")} />
                                Đăng nhập
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </Link>
                    <Link to={"/auth/sign-up"} className={cx("item-link")}>
                        <ListItem>
                            <ListItemText className={cx("item-text")}>
                                <HowToRegIcon className={cx("icon")} />
                                Đăng ký
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </Link>
                    <Link to={"/auth/forgot"} className={cx("item-link")}>
                        <ListItem>
                            <ListItemText className={cx("item-text")}>
                                <HelpIcon className={cx("icon")} />
                                Quên mật khẩu
                            </ListItemText>
                        </ListItem>
                    </Link>
                </>
            )}
        </List>
    );
}

export default DropdownAccount;
