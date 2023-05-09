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
import axios from "axios";
import classnames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import style from "./Dialog.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import { useForm } from "~/hooks/useForm";

const cx = classnames.bind(style);

function DialogCustom(props) {
    const checkRef = useRef();
    // lưu trữ danh sách
    const [provinces, setProvinces] = useState();
    const [districts, setDistricts] = useState();
    const [wards, setWards] = useState();

    // lưu trữ cụ thể
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [ward, setWard] = useState();

    // đóng/mở tag
    const [openProvince, setOpenProvince] = useState(false);
    const [openDistrict, setOpenDistrict] = useState(false);
    const [openWard, setOpenWard] = useState(false);
    // handle province
    const handleProvince = {
        clickInput: async () => {
            // set hidden box
            if (openDistrict) setOpenDistrict(!openDistrict);
            if (openWard) setOpenWard(!openWard);
            setOpenProvince(!openProvince);

            if (!provinces) {
                const fetchData = await axios.get("https://vapi.vnappmob.com/api/province/", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                setProvinces(fetchData?.data?.results);
            }
        },

        chooseProvince: (e) => {
            const id = e.target.getAttribute("data-province-id");
            const name = e.target.getAttribute("data-province-name");

            setProvince({ id, name });
            setValues({
                ...values,
                provinceName: name,
            });
            setOpenProvince(!openProvince);
        },
    };

    // handle district
    const handleDistrict = {
        clickInput: async () => {
            // set hidden box
            if (openProvince) setOpenProvince(!openProvince);
            if (openWard) setOpenWard(!openWard);
            setOpenDistrict(!openDistrict);

            const fetchData = await axios.get(
                `https://vapi.vnappmob.com/api/province/district/${province?.id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setDistricts(fetchData?.data?.results);
        },

        chooseDistrict: (e) => {
            const id = e.target.getAttribute("data-district-id");
            const name = e.target.getAttribute("data-district-name");

            setDistrict({ id, name });
            setValues({
                ...values,
                districtName: name,
            });
            setOpenDistrict(!openDistrict);
        },
    };
    // handle ward
    const handleWard = {
        clickInput: async () => {
            //set hidden box
            if (openDistrict) setOpenDistrict(!openDistrict);
            if (openProvince) setOpenProvince(!openProvince);
            setOpenWard(!openWard);

            const fetchData = await axios.get(
                `https://vapi.vnappmob.com/api/province/ward/${district?.id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setWards(fetchData?.data?.results);
        },
        chooseWard: (e) => {
            const id = e.target.getAttribute("data-ward-id");
            const name = e.target.getAttribute("data-ward-name");

            setWard({ id, name });
            setValues({
                ...values,
                wardName: name,
            });
            setOpenWard(!openWard);
        },
    };
    const initialValues = {
        fullName: "",
        phone: "",
        email: "",
        provinceName: "",
        districtName: "",
        wardName: "",
        address: "",
    };
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let tempEnable = { ...errorsEnable };
        if ("fullName" in fieldValues) {
            if (fieldValues.fullName === "") {
                tempEnable.fullName = true;
                temp.fullName = "Không được để trống.";
            } else {
                tempEnable.fullName = false;
                temp.fullName = "";
            }
        }
        if ("email" in fieldValues) {
            if (fieldValues.email !== "") {
                if (/$^|.+@.+..+/.test(fieldValues.email)) {
                    temp.email = "";
                    tempEnable.email = false;
                } else {
                    temp.email = "Không đúng định dạng email";
                    tempEnable.email = true;
                }
            } else {
                temp.email = "Không được để trống";
                tempEnable.email = true;
            }
        }
        if ("phone" in fieldValues) {
            if (fieldValues.phone !== "") {
                if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(fieldValues.phone)) {
                    temp.phone = "";
                    tempEnable.phone = false;
                } else {
                    temp.phone = "Không đúng định dạng số điện thoại Việt Nam";
                    tempEnable.phone = true;
                }
            } else {
                temp.phone = "Không được để trống";
                tempEnable.phone = true;
            }
        }
        if ("provinceName" in fieldValues) {
            if (fieldValues.provinceName === "") {
                tempEnable.provinceName = true;
                temp.provinceName = "Không được để trống.";
            } else {
                tempEnable.provinceName = false;
                temp.provinceName = "";
            }
        }
        if ("districtName" in fieldValues) {
            if (fieldValues.districtName === "") {
                tempEnable.districtName = true;
                temp.districtName = "Không được để trống.";
            } else {
                tempEnable.districtName = false;
                temp.districtName = "";
            }
        }
        if ("wardName" in fieldValues) {
            if (fieldValues.wardName === "") {
                tempEnable.wardName = true;
                temp.wardName = "Không được để trống.";
            } else {
                tempEnable.wardName = false;
                temp.wardName = "";
            }
        }
        if ("address" in fieldValues) {
            if (fieldValues.address === "") {
                tempEnable.address = true;
                temp.address = "Không được để trống.";
            } else {
                tempEnable.address = false;
                temp.address = "";
            }
        }
        setErrors({
            ...temp,
        });
        setErrorsEnable({
            ...tempEnable,
        });
        if (fieldValues === values) return Object.values(temp).every((x) => x === ""); // trả về boolean
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm,
    } = useForm(initialValues, true, validate);

    // useEffect(() => {
    //     const renderData = () => {
    //         if (props?.data) {
    //             setValues({
    //                 ...values,
    //                 fullName: props?.data?.fullName,
    //                 email: props?.data?.email,
    //                 phone: props?.data?.phone,
    //                 provinceName: props?.data?.provinceName,
    //                 districtName: props?.data?.districtName,
    //                 wardName: props?.data?.wardName,
    //                 address: props?.data?.address,
    //             });
    //             setDistrict({ id: props?.data?.districtId, name: props?.data?.districtName });
    //             setProvince({ id: props?.data?.provinceId, name: props?.data?.provinceName });
    //             setWard({ id: props?.data?.wardId, name: props?.data?.districtName });
    //         }
    //     };
    //     renderData();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            props.parentCallbackSubmit({
                ...values,
                isDefault: checkRef.current?.checked,
                provinceId: province?.id,
                districtId: district?.id,
                wardId: ward?.id,
            });
            props.parentCallbackClose(false);
            resetForm();
        }
    };

    const handleCancel = () => {
        if (!props?.data) {
            resetForm();
            setProvince();
            setDistrict();
            setWard();
        }
        props.parentCallbackClose(false);
    };
    return (
        <Dialog
            open={props.open}
            onClose={() => props.parentCallbackClose(false)}
            className={cx("dialog-content")}
            PaperProps={{
                style: {
                    maxWidth: "520px",
                    width: "520px",
                    position: "relative",
                },
            }}
        >
            <DialogTitle className={cx("dialog-title")}>Thông tin người nhận hàng</DialogTitle>
            <DialogContent>
                <Box
                    id="address-form"
                    component={"form"}
                    onSubmit={handleSubmit}
                    className={cx("form")}
                >
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
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            error={errorsEnable.fullName}
                            value={values.fullName}
                            helperText={errors.fullName}
                            onChange={handleInputChange}
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
                                placeholder="Nhập số điện thoại"
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                error={errorsEnable.phone}
                                value={values.phone}
                                helperText={errors.phone}
                                onChange={handleInputChange}
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
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                error={errorsEnable.email}
                                value={values.email}
                                helperText={errors.email}
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
                                name="provinceName"
                                inputProps={{
                                    style: {
                                        fontSize: "1.4rem",
                                        padding: "1.2rem 1.4rem",
                                    },
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                onChange={handleInputChange}
                                error={errorsEnable.provinceName}
                                value={values.provinceName}
                                helperText={errors.provinceName}
                                placeholder="Chọn"
                                onClick={handleProvince.clickInput}
                            />
                            <Box className={cx("select-option", `${openProvince ? "" : "hidden"}`)}>
                                {provinces &&
                                    provinces.map((item, index) => (
                                        <Box
                                            key={index}
                                            data-province-id={item.province_id}
                                            data-province-name={item.province_name}
                                            className={cx("option")}
                                            onClick={handleProvince.chooseProvince}
                                        >
                                            {item.province_name}
                                            {province?.id === item.province_id ? (
                                                <CheckIcon className={cx("icon")} />
                                            ) : (
                                                ""
                                            )}
                                        </Box>
                                    ))}
                            </Box>
                        </Box>
                        <Box className={cx("form-flex")} sx={{ width: "50%" }}>
                            <Box>
                                <Box component={"label"} className={cx("form-label")}>
                                    Quận/ Huyện
                                </Box>
                            </Box>
                            <TextField
                                name="district"
                                inputProps={{
                                    style: {
                                        fontSize: "1.4rem",
                                        padding: "1.2rem 1.4rem",
                                    },
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                onChange={handleInputChange}
                                error={errorsEnable.districtName}
                                value={values.districtName}
                                helperText={errors.districtName}
                                placeholder="Chọn"
                                onClick={handleDistrict.clickInput}
                            />
                            <Box className={cx("select-option", `${openDistrict ? "" : "hidden"}`)}>
                                {districts?.length > 0 ? (
                                    districts.map((item, index) => (
                                        <Box
                                            key={index}
                                            data-district-id={item.district_id}
                                            data-district-name={item.district_name}
                                            className={cx("option")}
                                            onClick={handleDistrict.chooseDistrict}
                                        >
                                            {item.district_name}
                                            {district?.id === item.district_id ? (
                                                <CheckIcon className={cx("icon")} />
                                            ) : (
                                                ""
                                            )}
                                        </Box>
                                    ))
                                ) : (
                                    <Box className={cx("option")}>Không có dữ liệu</Box>
                                )}
                            </Box>
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
                                inputProps={{
                                    style: {
                                        fontSize: "1.4rem",
                                        padding: "1.2rem 1.4rem",
                                    },
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                onChange={handleInputChange}
                                error={errorsEnable.wardName}
                                value={values.wardName}
                                helperText={errors.wardName}
                                placeholder="Chọn"
                                onClick={handleWard.clickInput}
                            />
                            <Box className={cx("select-option", `${openWard ? "" : "hidden"}`)}>
                                {wards?.length > 0 ? (
                                    wards.map((item, index) => (
                                        <Box
                                            key={index}
                                            data-ward-id={item.ward_id}
                                            data-ward-name={item.ward_name}
                                            className={cx("option")}
                                            onClick={handleWard.chooseWard}
                                        >
                                            {item.ward_name}
                                            {ward?.id === item.ward_id ? (
                                                <CheckIcon className={cx("icon")} />
                                            ) : (
                                                ""
                                            )}
                                        </Box>
                                    ))
                                ) : (
                                    <Box className={cx("option")}>Không có dữ liệu</Box>
                                )}
                            </Box>
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
                                onChange={handleInputChange}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                error={errorsEnable.address}
                                value={values.address}
                                helperText={errors.address}
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
                    {!props?.data?.isDefault && (
                        <Box className={cx("form-multiple")} sx={{ justifyContent: "flex-end" }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox name="default" inputRef={checkRef} />}
                                    label="Đặt làm mặc định"
                                    sx={{ ".MuiTypography-body1": { fontSize: "1.3rem" } }}
                                />
                            </FormGroup>
                        </Box>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Box className={cx("dialog-actions")}>
                    <Button variant="outlined" className={cx("btn-cancel")} onClick={handleCancel}>
                        Huỷ bỏ
                    </Button>
                    <Button
                        variant="contained"
                        type="submit"
                        className={cx("btn-save")}
                        form="address-form"
                    >
                        Lưu địa chỉ
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}
export default DialogCustom;
