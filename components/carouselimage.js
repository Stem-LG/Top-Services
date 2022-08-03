import { Navigation, Pagination, Autoplay, EffectCoverflow,Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

let pictures = [
  { bgColor: "red", src: "/assets/images/gallery/image1.jpg", text: "TBD 1" },
  { bgColor: "blue", src: "", text: "TBD 2" },
  { bgColor: "green", src: "", text: "TBD 3" },
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
      autoplay={{ delay: 3000 }}
      navigation
      loop={true}
      speed={900}
      pagination={{ clickable: true }}
      keyboard={true}
    >
      {pictures.map((pic, key) => (
        <SwiperSlide key={key}>
          <Box
            sx={{
              backgroundColor: pic.bgColor,
              backgroundImage: `url(${pic.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center 60%",
              height: 500,
            }}
          >
            <Box sx={{backgroundColor:"#0005", width:300, height:125}}>
              <Typography variant="h3" color="#fffd">
                {pic.text}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
