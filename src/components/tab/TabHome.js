import { useState } from "react";
import style from "./Tab.module.scss";
import classnames from "classnames/bind";
import { Box } from "@mui/material";
import { ProductHot, ProductNews } from "../product-home";

const cx = classnames.bind(style);
function TabHome(params) {
    const [value, setValue] = useState(1);
    return (
        <Box className={cx("tab-home")}>
            <Box component={"ul"} className={cx("tabs")}>
                <Box
                    component={"li"}
                    className={cx("tab", value === 1 ? "active" : "")}
                    onClick={() => setValue(1)}
                >
                    Sản phẩm mới
                </Box>
                <Box
                    component={"li"}
                    className={cx("tab", value === 2 ? "active" : "")}
                    onClick={() => setValue(2)}
                >
                    Sản phẩm bán chạy
                </Box>
            </Box>
            {value === 1 ? <ProductNews /> : <ProductHot />}
        </Box>
    );
}

export default TabHome;
