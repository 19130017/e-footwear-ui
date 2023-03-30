import { Box, Grid, InputBase, Menu, Modal } from "@mui/material";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import { DropdownAccount, DropdownCart, DropdownSearch } from "../dropdown";
import { useState } from "react";
import { cartProductData } from "~/service/fakeData";
const cx = classNames.bind(style);

function Header() {
    const [dataSearch, setDataSearch] = useState();
    const [searchText, setSearchText] = useState("");
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
                    <ul className={cx("menu")}>
                        <li className={cx("link")}>
                            <Link to="/about" className={cx("menu-item")}>
                                Về HB's
                            </Link>
                        </li>
                        <li className={cx("link", "has-submenu")}>
                            <Link to="/product/male" className={cx("menu-item")}>
                                Nam
                            </Link>
                            <ArrowDropDownIcon className={cx("icon")} />
                            <ul className={cx("submenu")}>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Thể Thao
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Bóng Đá
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Chạy Bộ
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Da
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Sandal
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={cx("link", "has-submenu")}>
                            <Link to="/product/female" className={cx("menu-item")}>
                                Nữ
                            </Link>
                            <ArrowDropDownIcon className={cx("icon")} />
                            <ul className={cx("submenu")}>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Thể Thao
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Búp Bê
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Chạy Bộ
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Da
                                    </Link>
                                </li>
                                <li className={cx("submenu-item")}>
                                    <Link className={cx("direct")} to="">
                                        Giày Cao Gót
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
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
                                <PersonIcon className={cx("icon")} />
                            </IconButton>
                            <Box className={cx("dropdown-account")}>
                                <DropdownAccount />
                            </Box>
                        </Box>

                        <Box className={cx("icon-wrapper")}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                                className={cx("icon-btn")}
                            >
                                <Badge badgeContent={4} color="error">
                                    <ShoppingBagIcon className={cx("icon")} />
                                </Badge>
                            </IconButton>
                            <Box className={cx("dropdown-cart")}>
                                <DropdownCart />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
