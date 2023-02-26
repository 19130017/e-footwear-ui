import { Box, Grid } from "@mui/material";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { display, flexbox } from "@mui/system";

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
        <Grid item xs={8}>
          <div className={cx("menu")}>
            <div className={cx("link")}>
              <span className={cx("menu-item")}>Sản phẩm</span>
            </div>
            <div className={cx("link")}>
              <span className={cx("menu-item")}>Khuyến mãi</span>
            </div>
            <div className={cx("link")}>
              <span className={cx("menu-item")}>Về HB Fashion</span>
            </div>
            <div className={cx("link")}>
              <span className={cx("menu-item")}>Contact</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={cx("icons")}>
            <SearchIcon className={cx("icon")} />
            <PersonIcon className={cx("icon")} />
            <ShoppingCartIcon className={cx("icon")} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
