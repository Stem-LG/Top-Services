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

let services = [
  {
    picture: "/assets/images/carousel/image1.jpg",
    title: "Lawn Mowing",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    icon: "/assets/icons/lawnmower.svg",
  },
  {
    picture: "/assets/images/carousel/image2.jpg",
    title: "Tree Trimming",
    description:
      "We provide proper care and trimming to protect your trees longevity.",
    icon: "/assets/icons/treetrimming.svg",
  },
  {
    picture: "/assets/images/carousel/image3.jpg",
    title: "Open Spaces Decoration",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    icon: "/assets/icons/planting.svg",
  },
];

export default function ImageSlider(props) {
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
            <Grid item sm={8.5} xs>
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
              sm={3.5}
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
