import {Box, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";


function CollectionItem(props) {
    return (
        <Link to={props.link} className={"group block relative overflow-hidden no-underline rounded-[10px] w-full"}>
            <Box className={"group-hover:bg-black/20 w-full h-full absolute z-40"} />
            <Box sx={{backgroundImage: `url(${props.image})`}} className={"relative h-[200px] md:h-[400px] bg-center bg-cover bg-no-repeat"} />
            <Typography
                variant="subtitle1"
                className={"w-1/2 absolute -bottom-full left-10 group-hover:bottom-12 " +
                    "text-white text-[2.2rem] font-bold leading-[3rem] transition-all duration-300 z-50"}>
                {props.title}
            </Typography>
        </Link>
    );
}

function Collection({data}) {
    return (
        <Box component={"section"} className={"section"}>
            <Box className={"container mx-auto"}>
                <Typography variant="h3" className={"text-center text-5xl font-bold uppercase mb-8"}>
                    Bộ sưu tập
                </Typography>
                <Grid container spacing={2}>
                    {data?.map((item, index) => (
                        <Grid item md={3} xs={6} key={index}>
                            <CollectionItem image={item.imageURL} link={item.link} title={item.title}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default Collection;
