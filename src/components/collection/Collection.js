import style from "./Collection.module.scss";
import classnames from "classnames/bind";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { collectionData } from "~/service/fakeData";
const cx = classnames.bind(style);

function CollectionItem(props) {
    return (
        <Link to={props.link} className={cx("section-collection")}>
            <Box sx={{ backgroundImage: `url(${props.image})` }} className={cx("collection-image")}>
                <Box className={cx("collection-overlay")}>
                    <Typography variant="subtitle1" className={cx("title")}>
                        {props.title}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
}

function Collection({data}) {
    return (
        <Box sx={{ padding: "10rem 0 2rem" }} className="container">
            {/* <Typography variant="h3" className={cx("header")}>
                Bộ sưu tập
            </Typography> */}
            <Grid container spacing={2}>
                {data?.map((item, index) => (
                    <Grid item xs={3} key={index}>
                        <CollectionItem image={item.imageURL} link={item.link} title={item.title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Collection;
