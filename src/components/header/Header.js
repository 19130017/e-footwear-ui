import { Box, Grid, InputBase } from "@mui/material";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
const cx = classNames.bind(style);

function Header() {
  return (
    <Box className={cx("header")}>
      <Grid container>
        <Grid item xs={2}>
          <Link to="/" className={cx("link-logo")}>
            <img src={logo} alt="" className={cx("logo")} />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <ul className={cx("menu")}>
            <li className={cx("link")}>
              <Link to="/product" className={cx("menu-item")}>
                Sản phẩm
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
            <li className={cx("link")}>
              <Link to="/about" className={cx("menu-item")}>
                Về chúng tôi
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={4}>
          <Box className={cx("icons")}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#efefef",
                width: "100%",
                borderRadius: "5px",
                width:"50%"
              }}
            >
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: "16px",
                  padding: "5px 8px",
                }}
                placeholder="Bạn đang tìm gì ?"
                type="text"
              />
              <IconButton aria-label="search">
                <SearchIcon outline="none" className={cx("icon")} />
              </IconButton>
            </Box>
            <PersonIcon className={cx("icon")} />
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingBagIcon className={cx("icon")} />
              </Badge>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
