import { useState } from "react";
import classnames from "classnames/bind";
import { Box } from "@mui/material";
import { ProductHot, ProductNews } from "../product-home";

function TabHome() {
    const [value, setValue] = useState(1);

    return (
        <Box component={"section"} className={"section"}>
            <Box className={"container mx-auto"}>
                <Box component={"ul"} className={"flex justify-center list-none"}>
                    <Box
                        component={"li"}
                        className={`cursor-pointer uppercase text-[1.8rem] leading-2 m-8 ${value === 1 ? "font-bold text-black" : ""}`}
                        onClick={() => setValue(1)}
                    >
                        Sản phẩm mới
                    </Box>
                    <Box
                        component={"li"}
                        className={`cursor-pointer uppercase text-[1.8rem] leading-2 m-8 ${value === 2 ? "font-bold text-black" : ""}`}
                        onClick={() => setValue(2)}
                    >
                        Sản phẩm bán chạy
                    </Box>
                </Box>
                {value === 1 ? <ProductNews /> : <ProductHot />}
            </Box>
        </Box>
    );
}

export default TabHome;
