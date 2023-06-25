import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import "./CheckoutItem.scss";

function Address(props) {
    const { data, parentCallback } = props;
    return (
        <Grid container spacing={2} className="flex-col lg:flex-row ">
            {data.map((item, index) => (
                <Grid item xs={12} lg={6} key={index} className="mb-4">
                    <Box
                        component={"input"}
                        type="radio"
                        name="address"
                        id={`address-${item.id}`}
                        hidden
                        onChange={() => parentCallback(item)}
                    />
                    <Box component={"label"} htmlFor={`address-${item.id}`}>
                        <Box className="card bg-white py-4 px-6 overflow-hidden rounded-lg cursor-pointer  lg:h-[100px]">
                            <Box className="text-2xl">{item.fullName}</Box>
                            <Box>
                                <Box className="text-xl">{item.phone}</Box>
                                <Box className="text-xl text-slip-2">
                                    {item.address},{item.addresses.wardName},
                                    {item.addresses.districtName},{item.addresses.provinceName}
                                </Box>
                            </Box>
                            <Box className="pseudo">
                                <CheckIcon className="icon" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}

export default Address;
