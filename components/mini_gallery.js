import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Image from "next/image";

export default function MiniGallery(props) {
  return (
    <Paper elevation={8} sx={{ padding: props.padding, margin: props.margin }} id="gallery">
      <Typography variant="h4" color="primary" align="center">
        Gallery
      </Typography>
      <ImageList
        variant="quilted"
        cols={2}
        rowHeight={150}
        sx={{ display: { xs: "grid", sm: "none" } }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.m_cols || 1}
            rows={item.m_rows || 1}
            sx={{ display: item.display || "" }}
          >
            <Image
              width={200 * item.m_cols || 200}
              height={200 * item.m_rows || 200}
              alt={item.title}
              src={item.img}
              loading="lazy"
              layout="fill"
              objectFit="cover"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={150}
        sx={{ display: { xs: "none", sm: "grid" } }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{ display: item.display || "" }}
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
    m_cols: 2,
    m_rows: 2,
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
    display: { xs: "none", sm: "block" },
  },
  {
    img: "/assets/images/gallery/image7.jpg",
    title: "Basketball",
    display: { xs: "none", sm: "block" },
  },
  {
    img: "/assets/images/gallery/image8.jpg",
    title: "Fern",
    display: { xs: "none", sm: "block" },
  },
  {
    img: "/assets/images/gallery/image9.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
    display: { xs: "none", md: "block" },
  },
  {
    img: "/assets/images/gallery/image10.jpg",
    title: "Tomato basil",
    display: { xs: "none", md: "block" },
  },
  {
    img: "/assets/images/gallery/image11.jpg",
    title: "Sea star",
    display: { xs: "none", md: "block" },
  },
  {
    img: "/assets/images/gallery/image12.jpg",
    title: "Bike",
    cols: 2,
    display: { xs: "none", md: "block" },
  },
];
