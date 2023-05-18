import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Purchase.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function PurchaseContent(props) {
    const { item, id } = props;
    return (
        <Box className={cx("product-wrapper")}>
            <Link to={`/account/purchase/order/${id}`} className={cx("product-link")}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Avatar
                            variant="rounded"
                            src={item.detail.product.images[0].imageURL}
                            className={cx("product-image")}
                        />
                    </Grid>
                    <Grid item xs={8} className={cx("product-detail")}>
                        <Grid container direction="column">
                            <Grid item className={cx("name")}>
                                <Typography variant="body1" className={cx("text", "text-ellipsis")}>
                                    {item.detail.product.name}
                                </Typography>
                            </Grid>
                            <Grid item className={cx("category")}>
                                <Typography variant="body1" className={cx("text", "text-light")}>
                                    Loại: {item.detail.product.category.name}
                                </Typography>
                            </Grid>
                            <Grid item className={cx("category")}>
                                <Typography variant="body1" className={cx("text", "text-light")}>
                                    Màu sắc: {item.detail.product.color.name} / Kích cỡ:{" "}
                                    {item.detail.size.value}
                                </Typography>
                            </Grid>
                            <Grid item className={cx("quantity")}>
                                <Typography variant="body1" className={cx("text")}>
                                    Số lượng: {item.quantity}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={cx("price-wrapper")}>
                        <Typography variant="body1" className={cx("old-price")}>
                            {item.detail.product.originPrice.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Typography>
                        <Typography variant="body1" className={cx("new-price")}>
                            {item.price.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </Box>
    );
}

export default PurchaseContent;
