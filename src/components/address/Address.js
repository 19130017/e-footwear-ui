import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import AccountHeader from "../header/AccountHeader";
import classnames from "classnames/bind";
import style from "./Address.module.scss";
import { userInfo } from "~/service/fakeData";
import { AddressAdd, AddressEdit, AddressDelete } from "../dialog";

const cx = classnames.bind(style);
function AddressItem({ data }) {
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
                            Địa chỉ: {data?.address}, {data?.wardName}, {data?.districtName},
                            {data?.provinceName}
                        </Typography>
                        <Typography variant="body1" className={cx("address-phone")}>
                            Điện thoại: {data?.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={cx("right-body")}>
                        <Grid container spacing={2} justifyContent={"flex-end"}>
                            <Grid item>
                                <AddressEdit data={data} />
                            </Grid>
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

function Address() {
    const { addresses } = { ...userInfo };
    return (
        <Paper className={cx("address")}>
            <AccountHeader
                title="Địa chỉ của tôi"
                text="Thêm địa chỉ mới của bạn, để chúng tôi có thể giao hàng."
            />

            <Box className={cx("content")}>
                <AddressAdd />

                <Box className={cx("address-list")}>
                    {addresses.map((item, index) => (
                        <AddressItem key={index} data={item} />
                    ))}
                </Box>
            </Box>
        </Paper>
    );
}

export default Address;
