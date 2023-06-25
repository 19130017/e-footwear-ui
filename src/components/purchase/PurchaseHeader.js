import { Box, Grid } from "@mui/material";
import TruckIcon from "@mui/icons-material/LocalShippingOutlined";

function PurchaseHeader(props) {
    return (
        <Grid container className="border-b border-solid border-gray pb-4">
            <Grid item>
                <Box className="text-2xl no-underline flex items-center text-success">
                    <TruckIcon className="w-8 h-8 mr-4" />
                    {props.data}
                </Box>
            </Grid>
        </Grid>
    );
}
export default PurchaseHeader;
