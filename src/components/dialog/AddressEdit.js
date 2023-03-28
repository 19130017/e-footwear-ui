import style from "./Dialog.module.scss";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";
const cx = classnames.bind(style);

function AddressEdit({ data }) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [provinces, setProvinces] = useState();
    const [district, setDistrict] = useState();
    const [ward, setWard] = useState();
    useEffect(() => {
        async function getProvinces() {
            const fetchData = await axios.get("https://vapi.vnappmob.com/api/province/", {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setProvinces(fetchData);
        }
        getProvinces();
    }, []);

    const handleChangeProvince = async (e) => {
        const province_id = e.target.value;
        const fetchData = await axios.get(
            `https://vapi.vnappmob.com/api/province/district/${province_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        setDistrict(fetchData);
    };
    const handleChangeDistrict = async (e) => {
        const district_id = e.target.value;
        const fetchData = await axios.get(
            `https://vapi.vnappmob.com/api/province/ward/${district_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        setWard(fetchData);
    };
    const handleSubmit = () => {
        //
    };
    return (
        <Box className={cx("dialog-main")}>
            <Button
                disableRipple
                variant="outlined"
                className={cx("btn-edit")}
                onClick={handleClickOpen}
            >
                Chỉnh sửa
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                className={cx("dialog-content")}
                PaperProps={{
                    style: {
                        maxWidth: "520px",
                        width: "520px",
                    },
                }}
            >
                <DialogTitle className={cx("dialog-title")}>Thông tin người nhận hàng</DialogTitle>
                <DialogContent>
                    <Box onSubmit={handleSubmit} component={"form"} className={cx("form")}>
                        <Box className={cx("form-flex")}>
                            <Box>
                                <Box
                                    component={"label"}
                                    htmlFor="fullName"
                                    className={cx("form-label")}
                                >
                                    Họ tên
                                </Box>
                            </Box>
                            <TextField
                                variant="outlined"
                                type="text"
                                name="fullName"
                                id="fullName"
                                value={data?.fullName}
                                placeholder="Vui lòng nhập tên người nhận"
                                inputProps={{
                                    style: { fontSize: "1.4rem", padding: "1.2rem 1.4rem" },
                                }}
                            />
                        </Box>
                        <Box className={cx("form-multiple")}>
                            <Box className={cx("form-flex")} sx={{ width: "50%" }}>
                                <Box>
                                    <Box
                                        component={"label"}
                                        htmlFor="phone"
                                        className={cx("form-label")}
                                    >
                                        Số điện thoại
                                    </Box>
                                </Box>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={data?.phone}
                                    placeholder="Nhập số điện thoại"
                                    inputProps={{
                                        style: {
                                            fontSize: "1.4rem",
                                            padding: "1.2rem 1.4rem",
                                            inputMode: "numeric",
                                            pattern: "[0-9]*",
                                        },
                                    }}
                                />
                            </Box>
                            <Box className={cx("form-flex")} sx={{ width: "50%" }}>
                                <Box>
                                    <Box
                                        component={"label"}
                                        htmlFor="email"
                                        className={cx("form-label")}
                                    >
                                        Email
                                    </Box>
                                </Box>
                                <TextField
                                    variant="outlined"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data?.email}
                                    placeholder="Nhập email của bạn"
                                    inputProps={{
                                        style: { fontSize: "1.4rem", padding: "1.2rem 1.4rem" },
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                            <Divider />
                        </Box>
                        <Typography variant="h5" className={cx("subtitle")}>
                            Địa chỉ nhận hàng
                        </Typography>

                        <Box className={cx("form-multiple")}>
                            <Box className={cx("form-flex")} sx={{ width: "50%" }}>
                                <Box>
                                    <Box component={"label"} className={cx("form-label")}>
                                        Tỉnh/ Thành phố
                                    </Box>
                                </Box>
                                <TextField
                                    name="province"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    select
                                    inputProps={{
                                        style: {
                                            fontSize: "1.4rem",
                                            padding: "1.2rem 1.4rem",
                                        },
                                    }}
                                    onChange={handleChangeProvince}
                                >
                                    {provinces?.results.map((option) => (
                                        <option key={option.province_id} value={option.province_id}>
                                            {option.province_name}
                                        </option>
                                    ))}
                                </TextField>
                            </Box>
                            <Box className={cx("form-flex")} sx={{ width: "50%" }}>
                                <Box>
                                    <Box component={"label"} className={cx("form-label")}>
                                        Quận/ Huyện
                                    </Box>
                                </Box>
                                <TextField
                                    name="district"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    select
                                    disabled={!district}
                                    inputProps={{
                                        style: {
                                            fontSize: "1.4rem",
                                            padding: "1.2rem 1.4rem",
                                        },
                                    }}
                                    onChange={handleChangeDistrict}
                                >
                                    {district ? (
                                        district?.results.map((option) => (
                                            <option
                                                key={option.district_id}
                                                value={option.district_id}
                                            >
                                                {option.district_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option>Không có dữ liệu</option>
                                    )}
                                </TextField>
                            </Box>
                        </Box>
                        <Box className={cx("form-multiple")}>
                            <Box className={cx("form-flex")} sx={{ width: "50%" }}>
                                <Box>
                                    <Box component={"label"} className={cx("form-label")}>
                                        Phường/ Xã
                                    </Box>
                                </Box>
                                <TextField
                                    name="ward"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    select
                                    disabled={!ward}
                                    inputProps={{
                                        style: {
                                            fontSize: "1.4rem",
                                            padding: "1.2rem 1.4rem",
                                        },
                                    }}
                                >
                                    {ward ? (
                                        ward?.results.map((option) => (
                                            <option key={option.ward_id} value={option.ward_id}>
                                                {option.ward_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option>Không có dữ liệu</option>
                                    )}
                                </TextField>
                            </Box>
                            <Box className={cx("form-flex")} sx={{ width: "50%" }}>
                                <Box>
                                    <Box
                                        component={"label"}
                                        htmlFor="address"
                                        className={cx("form-label")}
                                    >
                                        Địa chỉ cụ thể
                                    </Box>
                                </Box>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Số nhà, ngõ, tên đường,..."
                                    inputProps={{
                                        style: {
                                            fontSize: "1.4rem",
                                            padding: "1.2rem 1.4rem",
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                        {!data?.isDefault && (
                            <Box
                                className={cx("form-multiple")}
                                sx={{ justifyContent: "flex-end" }}
                            >
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox name="default" />}
                                        label="Đặt làm mặc định"
                                        sx={{ ".MuiTypography-body1": { fontSize: "1.3rem" } }}
                                    />
                                </FormGroup>
                            </Box>
                        )}
                     
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        className={cx("btn-cancel")}
                        onClick={() => setOpen(false)}
                    >
                        Huỷ bỏ
                    </Button>
                    <Button type='submit' variant="contained"  className={cx("btn-save")}>
                        Lưu địa chỉ
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AddressEdit;
