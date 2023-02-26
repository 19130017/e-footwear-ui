import {
    Avatar,
    Box,
    Button,
    Collapse,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import classNames from "classnames/bind";
import style from "./SideBar.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import avatar from "~/assets/images/avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentsIcon from '@mui/icons-material/Payments';

const cx = classNames.bind(style);
function SideBar() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box className={cx("side-bar")}>
            <Grid container alignItems="center">
                <Grid item xs={5}>
                    <Avatar alt="Avatar" src={avatar} className={cx("avatar")} />
                </Grid>
                <Grid item xs={7}>
                    <Grid container direction="column" sx={{ height: "100%" }} spacing={1}>
                        <Grid item>
                            <Typography variant="body">Bumpiz</Typography>
                        </Grid>
                        <Grid item>
                            <Box className={cx("verified")}>
                                <CheckIcon sx={{ marginLeft: "1rem", marginRight: "0.5rem" }} />
                                Verified Account
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: "2rem" }}>
                <Grid item>
                    {/* <Link to="/account">Quản lý tài khoản</Link> */}
                    <List
                        sx={{ display: "block" }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <PersonIcon sx={{ width: "2.4rem", height: "2.4rem" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Quản lý tài khoản"
                                primaryTypographyProps={{
                                    style: {
                                        fontSize: "1.4rem",
                                        padding: "0 .5rem",
                                        fontWeight: "bold",
                                    },
                                }}
                            />
                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    sx={{ padding: "0 0 0 4rem" }}
                                    component={Link}
                                    to="/account/profile"
                                >
                                    <ListItemText
                                        primary="Thông tin cá nhân"
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: "1.4rem",
                                                color: "#000",
                                            },
                                        }}
                                    />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ padding: "0 0 0 4rem" }}
                                    component={Link}
                                    to="/account/change-password"
                                >
                                    <ListItemText
                                        primary="Đổi mật khẩu"
                                        primaryTypographyProps={{
                                            style: {
                                                fontSize: "1.4rem",
                                                color: "#000",
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                    <List sx={{padding:0}}>
                        <ListItemButton component={Link} to="/account/history">
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <PaymentsIcon sx={{ width: "2.4rem", height: "2.4rem" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Lịch sử mua hàng"
                                primaryTypographyProps={{
                                    style: {
                                        fontSize: "1.4rem",
                                        padding: "0 .5rem",
                                        fontWeight: "bold",
                                        color: "#000",
                                    },
                                }}
                            />
                        </ListItemButton>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SideBar;
