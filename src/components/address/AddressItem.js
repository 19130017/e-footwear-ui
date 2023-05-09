import classnames from "classnames/bind";
import style from "./Address.module.scss";
import { Box, Grid, Typography } from "@mui/material";

import { AddressEdit, AddressDelete } from "../dialog";
const cx = classnames.bind(style);
function AddressItem({ data }) {
    console.log(data);
    return (
        <Box className={cx("address-card")}>
            <Box className={cx("address-card-body")}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={8} className={cx("left-body")}>
                        <Grid container spacing={2}>
                            <Grid item className={cx("address-subtitle")}>
                                <Box component={"span"}>{data?.fullName}</Box>
                            </Grid>
                            {data?.isDefault && (
                                <Grid item className={cx("address-label")}>
                                    <Box component={"span"}>Mặc định</Box>
                                </Grid>
                            )}
                        </Grid>
                        <Typography variant="body1" className={cx("address-text")}>
                            Địa chỉ: {data?.address}, {data?.addresses?.wardName},
                            {data?.addresses?.districtName},{data?.addresses.provinceName}
                        </Typography>
                        <Typography variant="body1" className={cx("address-phone")}>
                            Điện thoại: {data?.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={cx("right-body")}>
                        <Grid container spacing={2} justifyContent={"flex-end"}>
                            <Grid item>{/* <AddressEdit address={data} /> */}</Grid>
                            {!data?.isDefault && (
                                <Grid item>
                                    <AddressDelete />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default AddressItem;
