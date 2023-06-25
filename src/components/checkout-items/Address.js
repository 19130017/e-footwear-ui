import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import "./Address.scss";

function Address(props) {
    const { data, parentCallback } = props;
    return (
        <Grid container className="flex-col">
            {data.map((item, index) => (
                <Grid item xs={12} key={index} className="mb-4">
                    <Box
                        component={"input"}
                        type="radio"
                        name="address"
                        id={`address-${item.id}`}
                        hidden
                        onChange={() => parentCallback(item)}
                    />
                    <Box component={"label"} htmlFor={`address-${item.id}`}>
                        <Box className="card border border-solid border-[#e0e0e0] bg-white py-4 px-6 overflow-hidden rounded-lg cursor-pointer">
                            <Box className="text-2xl">{item.fullName}</Box>
                            <Box>
                                <Box className="text-xl">{item.phone}</Box>
                                <Box className="text-xl text-slip">
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
