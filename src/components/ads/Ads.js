import { Box, Grid, Typography } from "@mui/material";

function Ads({ data }) {
    return (
        <Box component={"section"} className={"section"}>
            <Box className={"container mx-auto"}>
                <Typography variant="h3" className={"text-center text-[2.4rem] font-[700] pb-8 leading-[2.2rem] uppercase"}>
                    Chúng tôi có gì mới
                </Typography>
                <Grid container spacing={2} className={""}>
                    {data?.map((item, index) => {
                        switch (index) {
                            case 0:
                                return (
                                    <Grid key={index} item md={3} sm={12} xs={12} className={"h-[200px] md:h-[350px] lg:h-[500px]"}>
                                        <Box className={"h-full rounded-[5px] overflow-hidden"}>
                                            <img
                                                src={item.imageURL}
                                                alt={item.typeGallery.typeName}
                                                className={"w-full h-full object-cover hover:scale-105 transition-all duration-500"}
                                            />
                                        </Box>
                                    </Grid>
                                );
                            case 1:
                                return (
                                    <Grid key={index} item md={6} sm={6} xs={12} className={"h-[200px] md:h-[350px] lg:h-[500px]"}>
                                        <Box className={"h-full rounded-[5px] overflow-hidden"}>
                                            <img
                                                src={item.imageURL}
                                                alt={item.typeGallery.typeName}
                                                className={"w-full h-full object-cover hover:scale-105 transition-all duration-500"}
                                            />
                                        </Box>
                                    </Grid>
                                );
                            case 2:
                                return (
                                    <Grid key={index} item md={3} sm={6} xs={12} className={"h-[200px] md:h-[350px] lg:h-[500px]"}>
                                        <Box className={"h-full rounded-[5px] overflow-hidden"}>
                                            <img
                                                src={item.imageURL}
                                                alt={item.typeGallery.typeName}
                                                className={"w-full h-full object-cover hover:scale-105 transition-all duration-500"}
                                            />
                                        </Box>
                                    </Grid>
                                );
                        }
                    })}
                </Grid>
            </Box>
        </Box>
    );
}

export default Ads;
