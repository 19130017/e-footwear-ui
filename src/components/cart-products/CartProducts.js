import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorRounded } from "../color";
import CloseIcon from "@mui/icons-material/Close";
import "./CartProducts.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function CartProducts({ data, removeParentCallback, decreaseCallback, increaseCallback }) {
    return (
        <Box className="product-list">
            {data?.map((item, index) => {
                const totalDiscountPrice = item.price * item.quantity;
                const totalOriginPrice = item.detail.product.originPrice * item.quantity;
                return (
                    <Box key={index} className="product-item">
                        <Box
                            className="btn-remove"
                            onClick={() => removeParentCallback(index)}
                        >
                            <CloseIcon sx={{ height: "2rem", width: "2rem", color: "red" }} />
                        </Box>
                        <Box className="product-image">
                            <img
                                src={item.detail.product.imageURL}
                                alt={item.detail.product.name}
                            />
                        </Box>
                        <Box className="product-info">
                            <Typography variant="h5" className="product-text">
                                <Link
                                    to={`/detail/${item.detail.product.slug}/${item.detail.product.color.id}`}
                                    className="product-link"
                                >
                                    {item.detail.product.name}
                                </Link>
                            </Typography>
                            <Grid
                                container
                                spacing={1}
                                sx={{ marginTop: "1rem" }}
                                className="bottom-info"
                            >
                                <Grid item md={2}  xs={6}  className="item">
                                    <Box>
                                        Màu sắc:{" "}
                                        <ColorRounded
                                            nameColor={item.detail.product.color.codeColor}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item md={4}  xs={6} className="item">
                                    <Typography variant="body1">
                                        Kích thước: {item.detail.size}
                                    </Typography>
                                </Grid>
                                <Grid item md={3}  xs={6} className="item">
                                    <Box className="btn-number">
                                        <Box
                                            className="btn-change-quantity"
                                            onClick={() =>
                                                decreaseCallback({
                                                    id: item.detail.product.id,
                                                    size: item.detail.size,
                                                })
                                            }
                                        >
                                            <RemoveIcon />
                                        </Box>
                                        <Box className="show-quantity">{item.quantity}</Box>
                                        <Box
                                            className="btn-change-quantity"
                                            onClick={() =>
                                                increaseCallback({
                                                    id: item.detail.product.id,
                                                    size: item.detail.size,
                                                })
                                            }
                                        >
                                            <AddIcon />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={3}  xs={6} className="item price">
                                    <Box>
                                        <Typography variant="body1" className="current-price">
                                            {totalDiscountPrice.toLocaleString("it-IT", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </Typography>
                                    </Box>
                                    {item?.discountRate !== 0 && (
                                        <Box>
                                            <Typography variant="body1" className="pre-price">
                                                {totalOriginPrice.toLocaleString("it-IT", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </Typography>
                                        </Box>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}

export default CartProducts;
