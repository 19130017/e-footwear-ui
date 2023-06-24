import { Box, Button, Typography } from "@mui/material";
import "./Coupon.scss";
function Coupon(props) {
    const { item, parentCallback, id } = props;
    return (
        <Box className="bg-white flex p-2 overflow-auto rounded-2xl mb-4 overflow-hidden">
            <Box className="coupon-item-left relative w-1/4 flex items-center justify-center border-r border-dash border-[#ccc] ">
                <img
                    src="https://file.hstatic.net/1000230642/file/icon-coupon-3_c002643e1e1f4f4197daf580deed043a.png"
                    alt="discount"
                    className="w-32 h-32"
                />
            </Box>
            <Box className="pl-8 flex items-center justify-between flex-1">
                <Box>
                    <Typography variant="body1" className="font-bold text-2xl">
                        <span className="mr-2"> Giảm giá</span>
                        {item?.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </Typography>
                    <Typography variant="body2" className="text-xl my-2">
                        <span>Số lượng còn:</span> {item?.maxUsage}
                    </Typography>
                    <Typography variant="body2" className="text-xl my-2">
                        <span> Mã: </span>
                        {item?.code}
                    </Typography>
                    <Typography variant="body2" className="text-xl my-2">
                        <span> HSD:</span>
                        {item?.endTime}
                    </Typography>
                </Box>
                <Box className="mr-2">
                    <Button
                        variant="contained"
                        className={`bg-black text-white shadow-none outline-none border-none btn-coupon ${
                            item?.id == id ? "bg-[#ccc]" : ""
                        }`}
                        onClick={(e) => parentCallback(e, item)}
                        disabled={item?.id == id ? true : false}
                    >
                        Sử dụng
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Coupon;
