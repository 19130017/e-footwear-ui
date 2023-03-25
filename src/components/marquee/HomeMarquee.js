import { Box, Button, Grid } from "@mui/material";
import classnames from "classnames/bind";
import style from "./HomeMarquee.module.scss";
import marquee from "~/assets/images/marquee.png";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(style);
function HomeMarquee() {
    const navigate = useNavigate();
    return (
        <Grid container className={cx("marquee-section")}>
            <Grid item xs={2}>
                <img src={marquee} alt="marquee" className={cx("marquee-image")} />
            </Grid>
            <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
                <Box component={"marquee"} loop="infinite">
                    <Box className={cx("marquee-content")}>
                        <Box component={"span"}>bùng nổ ưu đã giảm giá 30% sản phẩm</Box>
                        <Box component={"span"}>
                            Giao hàng miễn phí toàn quốc với đơn hàng trên 1.5 triệu
                        </Box>
                        <Box component={"span"}>thả ga mua sắm</Box>
                        <Box component={"span"}>Slogon "Nâng niu bàn chân việt"</Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <Button
                    variant="contained"
                    className={cx("marquee-btn")}
                    onClick={() => navigate("/collection/nam")}
                >
                    Mua sắm ngay
                </Button>
            </Grid>
        </Grid>
    );
}

export default HomeMarquee;
