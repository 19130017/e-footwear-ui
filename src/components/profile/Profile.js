import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Profile() {
    const navigate = useNavigate();
    return (
        <Paper>
            profile
            <Button onClick={() => navigate("/account/profile/12321")}> Cập nhập thông tin</Button>
        </Paper>
    );
}

export default Profile;
