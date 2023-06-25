import { Avatar, Box, Grid, Typography } from "@mui/material";

function OrderProduct({ item }) {
    return (
        <Grid container spacing={2} className="items-center border-b border-solid border-gray py-4">
            <Grid
                item
                xs={4}
                sm={2}
                className="md:max-w-[30%] lg:max-w-[13%] flex items-center justify-center"
            >
                <Avatar
                    variant="rounded"
                    src={item.detail.product.images[0].imageURL}
                    className="w-32 h-32 border border-solid border-gray"
                />
            </Grid>
            <Grid item xs={8} sm={10} className="md:flex-1 ">
                <Grid container className="w-full flex-col sm:flex-row">
                    <Grid item xs={12} sm={9}>
                        <Grid container className="sm:items-center flex flex-col sm:flex-row">
                            <Grid item xs={12} sm={8} md={8} lg={9} className="flex-col flex">
                                <Grid item md={12} lg={5}>
                                    <Typography
                                        variant="body1"
                                        className="text-2xl text-black text-slip w-[180px]"
                                    >
                                        {item.detail.product.name}
                                    </Typography>
                                </Grid>
                                <Box lg={12} className="flex flex-col">
                                    <Grid item md={12} lg={12}>
                                        <Typography
                                            variant="body1"
                                            className="text-2xl text-light-black lg:mr-2"
                                        >
                                            Loại: {item.detail.product.category.name}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        md={12}
                                        lg={12}
                                        className="flex flex-col lg:flex-row"
                                    >
                                        <Typography
                                            variant="body1"
                                            className="text-2xl text-light-black"
                                        >
                                            Màu sắc: {item.detail.product.color.name},
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            className="text-2xl text-light-black lg:ml-2"
                                        >
                                            Kích cỡ: {item.detail.size.value}
                                        </Typography>
                                    </Grid>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={4} md={4} lg={3}>
                                <Typography variant="body1" className="text-2xl text-black">
                                    Số lượng: {item.quantity}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={3}
                        className="top-0 right-0 flex items-center justify-end"
                    >
                        <Typography
                            variant="body1"
                            className="text-2xl text-light-black line-through mr-2 hidden lg:block"
                        >
                            {item.detail.product.originPrice.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Typography>
                        <Typography variant="body1" className="text-2xl text-danger">
                            {item.price.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default OrderProduct;
