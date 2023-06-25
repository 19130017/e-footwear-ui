import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
    Badge,
    Box,
    Collapse,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import Search from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetParentCategory } from "~/redux/category/categorySlice";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { DropdownAccount, DropdownCart } from "../dropdown";
import PersonIcon from "@mui/icons-material/Person";
import "./Header.scss";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBagOutlined";

function HeaderMobile({ isLogin, avatar, cart }) {
    const categories = useSelector((state) => state.categoryReducer.categories);
    const dispatch = useDispatch();
    const [open, setOpen] = useState();
    useEffect(() => {
        dispatch(fetchGetParentCategory());
    }, []);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window.document.body : undefined;

    const handleOpen = (index) => {
        setOpen(index);
    };
    return (
        <Box className="sm:hidden py-4">
            <Grid container className="items-center">
                <Grid item xs={2} className="items-center justify-center flex">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={6} className="flex justify-center items-center">
                    <Link to="/" className="block no-underline">
                        <img src={logo} alt="" className="w-[100px]" />
                    </Link>
                </Grid>
                <Grid item xs={4} className="flex justify-end">
                    <Box className="icon-wrapper relative">
                        <IconButton className="p-0 hover:outline-none focus:outline-none border border-solid border-gray rounded-[100%]">
                            {isLogin ? (
                                <img
                                    src={avatar}
                                    alt="Anh dai dien"
                                    className="w-12 h-12 rounded-[50%] object-cover object-center"
                                />
                            ) : (
                                <PersonIcon className="h-[30px] w-[30px]" />
                            )}
                        </IconButton>
                        <Box className="dropdown-account">
                            <DropdownAccount isLogin={isLogin} />
                        </Box>
                    </Box>

                    <Box item className=" icon-wrapper relative ml-4">
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                            className="p-0 rounded-none hover:outline-none focus:outline-none"
                        >
                            <Badge badgeContent={cart?.length} color="error">
                                <ShoppingBagIcon className="h-[30px] w-[30px]" />
                            </Badge>
                        </IconButton>
                        <Box className="dropdown-cart">
                            <DropdownCart data={cart} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor="right"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
                }}
            >
                <Box className="flex items-center">
                    <Box onClick={handleDrawerToggle}>
                        <CloseIcon className="h-[20px] w-[20px] m-4" />
                    </Box>
                </Box>
                <Box>
                    <Box className="mx-4">
                        <Search parentCallback={handleDrawerToggle} />
                    </Box>
                    <List className="mx-4">
                        {categories &&
                            categories.map((item, index) => (
                                <li key={index}>
                                    <ListItemButton
                                        onClick={() => handleOpen(index)}
                                        className="no-underline p-4 flex items-center"
                                    >
                                        {item?.children.length !== 0 && (
                                            <Box className="rounded-[100%] bg-black/10 w-8 h-8 flex items-center justify-center mr-4">
                                                {open === index ? <ExpandMore /> : <ExpandLess />}
                                            </Box>
                                        )}
                                        <span className="text-black flex items-center text-3xl">
                                            {item.name}
                                        </span>
                                    </ListItemButton>
                                    {item?.children.length !== 0 && (
                                        <Collapse
                                            in={open === index}
                                            timeout="auto"
                                            unmountOnExit
                                            className="ml-12"
                                        >
                                            <List component="div" disablePadding>
                                                {item?.children.map((child, ci) => (
                                                    <Box key={ci} className="">
                                                        <Link
                                                            to={`collections/${child.slug}`}
                                                            className="text-3xl py-4 block"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </Box>
                                                ))}
                                            </List>
                                        </Collapse>
                                    )}
                                </li>
                            ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default HeaderMobile;
