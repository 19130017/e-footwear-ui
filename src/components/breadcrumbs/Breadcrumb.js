import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import style from "./Breadcrumb.module.scss";
const cx = classnames.bind(style);

function Breadcrumb({ data }) {
    const breadcrumbs = [
        <Link to={"/"} className={cx("text-link")} key={0}>
            Trang chủ
        </Link>,
        ...data,
    ];
    return (
        <Box className="container">
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumbs?.map((item, index) => item)}
            </Breadcrumbs>
        </Box>
    );
}

export default Breadcrumb;
