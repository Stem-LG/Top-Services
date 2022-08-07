import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Keyboard,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


export default function ImageSlider(props) {
  
  const services = [
    {
      picture: "/assets/images/carousel/image1.jpg",
      title: props.tr("home:landscaping"),
      description: props.tr("home:landscaping-desc"),
      icon: "/assets/icons/lawnmower.svg",
    },
    {
      picture: "/assets/images/carousel/image2.jpg",
      title: props.tr("home:tree-trimming"),
      description: props.tr("home:tree-trimming-desc"),
      icon: "/assets/icons/treetrimming.svg",
    },
    {
      picture: "/assets/images/carousel/image3.jpg",
      title: props.tr("home:decoration"),
      description: props.tr("home:decoration-desc"),
      icon: "/assets/icons/planting.svg",
    },
  ];
  
  
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#fff",
        "--swiper-navigation-color": "#fff",
      }}
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Keyboard]}
      effect="coverflow"
      autoplay={{ delay: 99999999 }}
      navigation
      loop={true}
      speed={900}
      pagination={{ clickable: true }}
      keyboard={true}
    >
      {services.map((service, key) => (
        <SwiperSlide key={key}>
          <Grid container direction={{ xs: "column", sm: "row" }}>
            <Grid item sm={8} md={8.5} xs>
              <Box height={350} sx={{ position: "relative" }}>
                <Image
                  src={service.picture}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid
              item
              container
              sm={4}
              md={3.5}
              direction={{ xs: "row", sm: "column" }}
              sx={{ bgcolor: "primary.main" }}
              alignItems="center"
            >
              <Grid item width={100} marginTop={{ sm: 4 }}>
                <Box height={100}>
                  <Avatar
                    variant="square"
                    sx={{ height: "80%", width: "80%", m: "10%" }}
                    src={service.icon}
                  />
                </Box>
              </Grid>
              <Grid item xs>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: { sm: "center" } }}
                    color="white"
                    marginBottom={{ sm: 3 }}
                    marginTop={{ sm: 2 }}
                  >
                    {service.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ textAlign: { sm: "center" } }}
                    color="white"
                    maxWidth="30ch"
                    margin={{ sm: "0 30px 25px 30px" }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
