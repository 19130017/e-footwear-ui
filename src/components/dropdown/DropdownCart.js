import { Box, Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
function DropdownCart({ data }) {
    const navigate = useNavigate();
    const total = data?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0);

    return (
        <Box className="w-[300px] md:w-[400px]">
            <Box className="py-4 px-8">
                <Typography
                    variant="h5"
                    className="text-center text-2xl uppercase pb-2 border-b border-solid border-[#ccc]"
                >
                    Giỏ hàng
                </Typography>
                {data?.length === 0 ? (
                    <Box className="flex items-center justify-center h-[100px]">
                        Hiện chưa có sản phẩm
                    </Box>
                ) : (
                    <Box className="m-h-[250px] overflow-y-scroll gap-4">
                        {data?.map((item, index) => (
                            <Grid
                                key={index}
                                container
                                className="w-full py-4 border-b border-solid border-[#ddd]"
                            >
                                <Grid item xs={4}>
                                    <img
                                        className="w-[75px] h-[75px]"
                                        alt="test"
                                        src={`${item.detail.product.imageURL}`}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Link
                                        to={`/detail/${item.detail.product.slug}/${item.detail.product.color.id}`}
                                        className="block text-black hover:no-underline"
                                    >
                                        <Typography
                                            variant="body1"
                                            className="text-xl text-slip w-[150px] md:w-[200px]"
                                        >
                                            {item.detail.product.name}
                                        </Typography>
                                    </Link>
                                    <Typography
                                        variant="body1"
                                        className="text-[#677279] text-xl mb-3 text-start"
                                    >
                                        {item.detail.product.color.name} / {item.detail.size}
                                    </Typography>
                                    <Box className="flex flex-col items-start md:flex-row  md:justify-between md:items-center">
                                        <Typography variant="body1" className="text-2xl">
                                            Số lượng: {item.quantity}
                                        </Typography>
                                        <Box className="">
                                            <Typography
                                                variant="body1"
                                                className="text-2xl font-bold"
                                            >
                                                {item.price.toLocaleString("it-IT", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </Typography>
                                            {item.detail.product.discountRate !== 0 && (
                                                <Typography
                                                    variant="body1"
                                                    className="text-2xl line-through text-[#677279]"
                                                >
                                                    {item.detail.product.originPrice.toLocaleString(
                                                        "it-IT",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        }
                                                    )}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>
                )}

                <Box>
                    <Box className="flex items-center justify-between py-4">
                        <Typography variant="body1" className="text-2xl uppercase">
                            Tổng tiền
                        </Typography>
                        <Typography variant="body1" className="text-3xl font-bold text-danger">
                            {total?.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            onClick={() => navigate("/cart")}
                            className="bg-black text-white w-full text-2xl shadow-none hover:shadow-none hover:bg-black "
                        >
                            Xem giỏ hàng
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DropdownCart;
