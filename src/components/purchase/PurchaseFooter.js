import { Box, Grid, Typography } from "@mui/material";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import "./Purchase.scss";

function PurchaseFooter(props) {
    return (
        <Box className="pt-4">
            <Grid container className="justify-end">
                <Grid item>
                    <Typography variant="body1" className="flex items-center">
                        <span className="text-3xl">Thành tiền:</span>
                        <span className="text-3xl font-bold ml-2 text-danger">
                            {props?.data.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </span>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
export default PurchaseFooter;
