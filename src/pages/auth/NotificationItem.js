import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TitleFullWidth } from "~/components/header/FullWidthHeader";

function NotificationItem() {
    const navigate = useNavigate();
    return (
        <Box className="w-full flex items-center justify-center py-6">
            <Box className="w-1/2">
                <TitleFullWidth title="Cấp lại mật khẩu" />
                <Box className="mt-6 flex w-full justify-center items-center">
                    <Box className="w-[450px]  flex flex-col rounded-lg border border-solid border-gray">
                        <Typography variant="body1" className="p-8 text-2xl  leading-10">
                            Vui lòng kiểm tra email của bạn và làm theo hướng dẫn để được cấp lại
                            mật khẩu. Nếu không tìm thấy email trong hộp thư đến, vui lòng kiểm tra
                            hộp thư rác.
                        </Typography>

                        <Box className="flex justify-center">
                            <Button
                                variant="contained"
                                className="text-2xl rounded-2xl bg-black p-6 normal-case w-1/2 mt-4 mb-12"
                                onClick={() => navigate("/auth/sign-in")}
                            >
                                Quay lại trang đăng nhập
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default NotificationItem;
