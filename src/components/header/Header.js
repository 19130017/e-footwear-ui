import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, Grid } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import Category from "../category";
import { DropdownAccount, DropdownCart } from "../dropdown";
import Search from "../search";
import "./Header.scss";
import HeaderMobile from "./HeaderMobile";

function Header() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const { isLogin, avatar } = useSelector((state) => state.authReducer);

    return (
        <Box className="container header mx-auto ">
            <HeaderMobile isLogin={isLogin} avatar={avatar} cart={cart}/>

            <Grid container className="items-center hidden sm:flex py-4">
                <Grid item sm={1}>
                    <Link to="/" className="no-underline flex items-center justify-center">
                        <img src={logo} alt="" />
                    </Link>
                </Grid>
                <Grid item sm={4}>
                    <Category />
                </Grid>
                <Grid item sm={5}>
                    <Search />
                </Grid>

                <Grid item sm={2}>
                    <Grid
                        container
                        className="h-full  justify-center outline-none mr-12 items-center"
                    >
                        <Grid item className="my-4 relative icon-wrapper mr-12">
                            <IconButton className="p-0  hover:outline-none focus:outline-none border border-solid border-gray rounded-[100%]">
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
                        </Grid>

                        <Grid item className="my-4 block icon-wrapper relative text-end">
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                                className="p-0 rounded-none hover:outline-none focus:outline-none"
                            >
                                <Badge badgeContent={cart.length} color="error">
                                    <ShoppingBagIcon className="h-[30px] w-[30px]" />
                                </Badge>
                            </IconButton>
                            <Box className="dropdown-cart">
                                <DropdownCart data={cart} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
