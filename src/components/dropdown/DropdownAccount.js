import { Box, Divider, List, ListItem } from "@mui/material";
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
        <List className="p-0 w-[200px]">
            {isLogin ? (
                <>
                    <Link
                        to={"/account/profile"}
                        className="block no-underline text-black cursor-pointer"
                    >
                        <ListItem>
                            <Box className="flex py-4 items-center text-2xl">
                                <ProfileIcon className="w-8 h-8 mr-4" />{" "}
                                <span className=" text-2xl"> Thông tin cá nhân</span>
                            </Box>
                        </ListItem>
                        <Divider />
                    </Link>
                    <Box className="block text-black cursor-pointer" onClick={handleClick}>
                        <ListItem>
                            <Box className="flex py-4 items-center text-2xl">
                                <LogoutIcon className="w-8 h-8 mr-4" />
                                <span className=" text-2xl"> Đăng Xuất</span>
                            </Box>
                        </ListItem>
                        <Divider />
                    </Box>
                </>
            ) : (
                <>
                    <Link
                        to={"/auth/sign-in"}
                        className="block no-underline text-black cursor-pointer"
                    >
                        <ListItem>
                            <Box className="flex py-4">
                                <LoginIcon className="w-8 h-8 mr-4" />
                                <span className="text-2xl"> Đăng nhập</span>
                            </Box>
                        </ListItem>
                        <Divider />
                    </Link>
                    <Link
                        to={"/auth/sign-up"}
                        className="block no-underline text-black cursor-pointer"
                    >
                        <ListItem>
                            <Box className="flex py-4 items-center text-2xl">
                                <HowToRegIcon className="w-8 h-8 mr-4" />
                                <span className=" text-2xl">Đăng ký</span>
                            </Box>
                        </ListItem>
                        <Divider />
                    </Link>
                    <Link
                        to={"/auth/forgot"}
                        className="block no-underline text-black cursor-pointer"
                    >
                        <ListItem>
                            <Box className="flex py-4 items-center text-2xl">
                                <HelpIcon className="w-8 h-8 mr-4" />
                                <span className=" text-2xl"> Quên mật khẩu</span>
                            </Box>
                        </ListItem>
                    </Link>
                </>
            )}
        </List>
    );
}

export default DropdownAccount;
