import { Box, Button, PaginationItem, Rating } from "@mui/material";
import style from "./Rate.module.scss";
import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { dataRate } from "~/assets/dataRate/dataRate";
import { dataComment } from "~/assets/dataComment/dataComment";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const cx = classNames.bind(style);


function Rate() {
    return (
        <Box className={cx("wrap-rate")}>
            {dataRate.map((item, index) => (
                <Box key={index} className={cx("container-rate")}>
                    <Box className={cx("rate")}>
                        <Typography className={cx("rate-title")}>{item.rate}<span className={cx("sub-heading")}>/5</span></Typography>
                        <Rating className={cx("star")} name="read-only" value={item.numberStar} readOnly size="large" />
                        <Typography className={cx("rate-content")}>{item.numberRate} lượt đánh giá</Typography>
                        <Box className={cx("star-container")}>
                            <Box className={cx("wrap-star")}>
                                <Rating className={cx("sub-star")} name="read-only" value={5} size="large" readOnly />
                                <Box className={cx("count_rate")}>
                                    <Box className={cx("progress", "active")} />
                                    <Box className={cx("number_rate")}>{item.numberRate5}</Box>
                                </Box>
                            </Box>
                            <Box className={cx("wrap-star")}>
                                <Rating className={cx("sub-star")} name="read-only" value={4} size="large" readOnly />
                                <Box className={cx("count_rate")}>
                                    <Box className={cx("progress")} />
                                    <Box className={cx("number_rate")}>{item.numberRate4}</Box>
                                </Box>
                            </Box>
                            <Box className={cx("wrap-star")}>
                                <Rating className={cx("sub-star")} name="read-only" value={3} size="large" readOnly />
                                <Box className={cx("count_rate")}>
                                    <Box className={cx("progress")} />
                                    <Box className={cx("number_rate")}>{item.numberRate3}</Box>
                                </Box>
                            </Box>
                            <Box className={cx("wrap-star")}>
                                <Rating className={cx("sub-star")} name="read-only" value={2} size="large" readOnly />
                                <Box className={cx("count_rate")}>
                                    <Box className={cx("progress")} />
                                    <Box className={cx("number_rate")}>{item.numberRate2}</Box>
                                </Box>
                            </Box>
                            <Box className={cx("wrap-star")}>
                                <Rating className={cx("sub-star")} name="read-only" value={1} size="large" readOnly />
                                <Box className={cx("count_rate")}>
                                    <Box className={cx("progress")} />
                                    <Box className={cx("number_rate")}>{item.numberRate1}</Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box className={cx("rate-button")}>
                            <Button className={cx("button")}>
                                <Typography className={cx("button-text")}>Viết đánh giá</Typography>
                            </Button>
                        </Box>

                    </Box>
                </Box>
            ))}

            <Box className={cx("detail-rate")}>
                <Box className={cx("heading")}>
                    <Typography className={cx("heading-text")}>Đánh giá sản phẩm</Typography>
                </Box>

                {dataComment.map((item, index) => (
                    <Box className={cx("wrap-comment")}>
                        <Box className={cx("wrap-sub_heading")}>
                            <Box className={cx("sub_heading")}>
                                <Typography className={cx("sub_name")}>{item.name}</Typography>
                                <Box className={cx("line")} />
                                <Rating className={cx("sub_star")} name="read-only" value={item.numberStar} size="large" readOnly />
                            </Box>
                            <Box className={cx("sub_time")}>
                                <Typography className={cx("sub_time-date")}>{item.date} <span className={cx("time")}> {item.time}</span></Typography>
                            </Box>
                        </Box>
                        <Box className={cx("wrap-content")}>
                            <Typography className={cx("content")}>{item.content}</Typography>
                            <Box className={cx("comment-image")}>
                                <img className={cx("image")} src={item.img} alt="" />
                            </Box>
                            <Box className={cx("wrap-like")}>
                                <ThumbUpOffAltIcon className={cx("like-icon")} />
                                <Typography className={cx("like-text")}>{item.liked}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
                <Box className={cx("wrap-pagination")}>
                    <Stack spacing={2}>
                        <Pagination className={cx("pagination")} color="primary" count={10} shape="rounded" size="large" renderItem={(item) => (
                            <PaginationItem sx={{ fontSize: "13px" }}
                                {...item}
                            />
                        )} />
                    </Stack>
                </Box>
            </Box>

        </Box >

    );
}
export default Rate;