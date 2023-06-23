import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Purchase.scss";

function PurchaseContent(props) {
    const { item, id } = props;
    return (
        <Box className="pt-5 pb-4 border-b border-solid border-gray">
            <Link to={`/account/purchase/order/${id}`} className="no-underline relative">
                <Grid container className="items-center" spacing={2}>
                    <Grid item sm={2} className="block">
                        <Avatar
                            variant="rounded"
                            src={item.detail.product.images[0].imageURL}
                            className="w-32 h-32 border border-solid border-gray"
                        />
                    </Grid>
                    <Grid item md={10} className="flex-1">
                        <Grid container className="w-full">
                            <Grid item md={8} className="hello">
                                <Grid container className="flex-col md:flex-row">
                                    <Grid item md={4} className="flex-col">
                                        <Grid item md={12}>
                                            <Typography
                                                variant="body1"
                                                className="text-2xl text-black text-slip w-[180px]"
                                            >
                                                {item.detail.product.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography
                                                variant="body1"
                                                className="text-2xl text-light-black"
                                            >
                                                Loại: {item.detail.product.category.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography
                                                variant="body1"
                                                className="text-2xl text-light-black"
                                            >
                                                Màu sắc: {item.detail.product.color.name}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                className="text-2xl text-light-black"
                                            >
                                                Kích cỡ: {item.detail.size.value}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={2}>
                                        <Typography variant="body1" className="text-2xl text-black">
                                            Số lượng: {item.quantity}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid
                                item
                                md={4}
                                className="mt-4 top-0 right-0 flex justify-end items-center"
                            >
                                <Typography
                                    variant="body1"
                                    className="text-2xl text-light-black line-through mr-2 hidden md:block"
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
            </Link>
        </Box>
    );
}

export default PurchaseContent;
