import { Box, Grid, InputBase, Menu, Modal } from "@mui/material";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import { DropdownAccount, DropdownCart, DropdownSearch } from "../dropdown";
import { useState } from "react";
import { cartProductData } from "~/service/fakeData";
import Category from "../category/Category";
import { useSelector } from "react-redux";
const cx = classNames.bind(style);

function Header() {
    const [dataSearch, setDataSearch] = useState();
    const [searchText, setSearchText] = useState("");
    const cart = useSelector((state) => state.cartReducer.cart);
    const { isLogin, avatar } = useSelector((state) => state.authReducer);
    const handleChange = (e) => {
        // call api get
        const value = e.target.value;
        setSearchText(value);
        if (value === "") setDataSearch(null);
        else setDataSearch(cartProductData);
    };

    return (
        <Box className={cx("header")}>
            <Grid container>
                <Grid item xs={2}>
                    <Link to="/" className={cx("link-logo")}>
                        <img src={logo} alt="" className={cx("logo")} />
                    </Link>
                </Grid>
                <Grid item xs={5}>
                    <Category />
                </Grid>
                <Grid item xs={5}>
                    <Box className={cx("icons")}>
                        <Box
                            sx={{
                                display: "flex",
                                backgroundColor: "#efefef",
                                borderRadius: "5px",
                                width: "50%",
                            }}
                            className={cx("icon-wrapper")}
                        >
                            <InputBase
                                sx={{
                                    ml: 1,
                                    flex: 1,
                                    fontSize: "16px",
                                    padding: "5px 0 5px 8px",
                                }}
                                placeholder="Bạn đang tìm gì ?"
                                type="text"
                                onChange={handleChange}
                            />
                            <IconButton
                                aria-label="search"
                                className={cx("icon-btn")}
                                sx={{ width: "20%" }}
                            >
                                <SearchIcon className={cx("icon")} />
                            </IconButton>
                            <Box className={cx("dropdown-search")}>
                                <DropdownSearch data={dataSearch} value={searchText} />
                            </Box>
                        </Box>

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
            </Grid>
        </Box>
    );
}

export default Header;
