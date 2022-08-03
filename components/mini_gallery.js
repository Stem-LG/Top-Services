import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Image from "next/image";

export default function MiniGallery(props) {
  return (
    <Paper elevation={8} sx={{ padding: props.padding, margin: props.margin }}>
      <Typography variant="h4" color="primary" align="center">
        Gallery
      </Typography>
      <ImageList variant="quilted" cols={4} rowHeight={150}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <Image
              width={200 * item.cols || 200}
              height={200 * item.rows || 200}
              alt={item.title}
              src={item.img}
              loading="lazy"
              layout="fill"
              objectFit="cover"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography variant="h6" color="primary" align="right">
        More
      </Typography>
    </Paper>
  );
}

const itemData = [
  {
    img: "/assets/images/gallery/image1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image2.jpg",
    title: "Burger",
  },
  {
    img: "/assets/images/gallery/image3.jpg",
    title: "Camera",
  },
  {
    img: "/assets/images/gallery/image4.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image5.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image6.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image7.jpg",
    title: "Basketball",
  },
  {
    img: "/assets/images/gallery/image8.jpg",
    title: "Fern",
  },
  {
    img: "/assets/images/gallery/image9.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image10.jpg",
    title: "Tomato basil",
  },
  {
    img: "/assets/images/gallery/image11.jpg",
    title: "Sea star",
  },
  {
    img: "/assets/images/gallery/image12.jpg",
    title: "Bike",
    cols: 2,
  },
];
