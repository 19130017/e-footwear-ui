import { Box, Button, Grid } from "@mui/material";
import classnames from "classnames/bind";
import style from "./HomeMarquee.module.scss";
import marquee from "~/assets/images/marquee.png";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(style);
function HomeMarquee() {
    const navigate = useNavigate();
    return (
        <Grid container className={cx("marquee-section", "bg-[#06072e] p-4 flex justify-between items-center")}>
            <Grid item sm={2} className={""}>
                <img src={marquee} alt="marquee" className={""} />
            </Grid>
            <Grid item xs={8} className={"px-8"}>
                <Box component={"marquee"} loop="infinite" className={"marquee-group group"}>
                    <Box className={cx("marquee-content", "flex gap-16 group-only:uppercase")}>
                        <Box component={"span"} className={""}>bùng nổ ưu đã giảm giá 30% sản phẩm</Box>
                        <Box component={"span"}>
                            Giao hàng miễn phí toàn quốc với đơn hàng trên 1.5 triệu
                        </Box>
                        <Box component={"span"}>thả ga mua sắm</Box>
                        <Box component={"span"}>Slogon "Nâng niu bàn chân việt"</Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4} sm={2} className={"text-center px-8"}>
                <Button
                    className={"w-full bg-[#f9f86c] rounded-3xl text-black text-[1.1rem] lg:text-[1.4rem] hover:bg-[#d9d9d9]"}
                    onClick={() => navigate("/collections/nam")}
                >
                    Mua sắm ngay
                </Button>
            </Grid>
        </Grid>
    );
}

export default HomeMarquee;
