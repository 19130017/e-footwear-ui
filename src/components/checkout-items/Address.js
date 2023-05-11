import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import classnames from "classnames/bind";
import style from "./Address.module.scss";
const cx = classnames.bind(style);

function Address(props) {
    const { data } = props;
    return (
        <Grid container spacing={2} sx={{ width: "100%" }}>
            {data.map((item, index) => (
                <Grid item xs={6} key={index}>
                    <Box
                        component={"input"}
                        type="radio"
                        name="address"
                        defaultChecked={item.isDefault}
                        id={`address-${item.id}`}
                        hidden
                    />
                    <Box component={"label"} htmlFor={`address-${item.id}`}>
                        <Box className={cx("card")}>
                            <Box className={cx("subtitle")}>{item.fullName}</Box>
                            <Box className={cx("address-body")}>
                                <Box className={cx("phone")}>{item.phone}</Box>
                                <Box className={cx("address")}>
                                    {item.address},{item.addresses.wardName},
                                    {item.addresses.districtName},{item.addresses.provinceName}
                                </Box>
                            </Box>
                            <Box className={cx("pseudo")}>
                                <CheckIcon className={cx("icon")} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}

export default Address;
