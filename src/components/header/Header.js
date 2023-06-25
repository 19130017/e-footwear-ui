import { Box, Grid } from "@mui/material";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import { DropdownAccount, DropdownCart } from "../dropdown";
import Category from "../category";
import { useSelector } from "react-redux";
import Search from "../search";
const cx = classNames.bind(style);

function Header() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const { isLogin, avatar } = useSelector((state) => state.authReducer);
    return (
        <Box className={cx("header")}>
            <Grid container className={"justify-between items-center"}>
                <Grid item sm={3} md={2}>
                    <Link to="/" className={cx("link-logo")}>
                        <img src={logo} alt="" className={cx("logo")} />
                    </Link>
                </Grid>
                <Grid item sm={6} md={3} className={"hidden sm:flex"}>
                    <Category />
                </Grid>
                <Grid item md={5} className={"hidden md:flex"}>
                    <Search />
                </Grid>
                <Grid item sm={3} md={2}>
                    <Box className={cx("icons")}>
                        <Box className={cx("icon-wrapper")}>
                            <IconButton className={cx("icon-btn")}>
                                {isLogin ? (
                                    <img
                                        src={avatar}
                                        alt="Anh dai dien"
                                        className={cx("avatar-image")}
                                    />
                                ) : (
                                    <PersonIcon className={cx("icon")} />
                                )}
                            </IconButton>
                            <Box className={cx("dropdown-account")}>
                                <DropdownAccount isLogin={isLogin} />
                            </Box>
                        </Box>

                        <Box className={cx("icon-wrapper")}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                                className={cx("icon-btn")}
                            >
                                <Badge badgeContent={cart.length} color="error">
                                    <ShoppingBagIcon className={cx("icon")} />
                                </Badge>
                            </IconButton>
                            <Box className={cx("dropdown-cart")}>
                                <DropdownCart data={cart} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} className={"flex sm:hidden"}>
                    <Category />
                </Grid>
                <Grid item xs={12} className={"flex flex-1 md:hidden mb-8 mx-8"}>
                    <Search />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
