import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Image from "next/image";

export default function MiniGallery(props) {
  return (
    <Paper elevation={8} sx={{ padding: props.padding, margin: props.margin }} id="gallery">
      <Typography variant="h4" color="primary" align="center">
        {props.tr("gallery")}
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
        {props.tr("more")}
      </Typography>
    </Paper>
  );
}

const itemData = [
  {
    img: "/assets/images/gallery/image1.jpg",
    rows: 2,
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image2.jpg",
  },
  {
    img: "/assets/images/gallery/image3.jpg",
    m_cols: 2,
    m_rows: 2,
  },
  {
    img: "/assets/images/gallery/image4.jpg",
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image5.jpg",
    cols: 2,
  },
  {
    img: "/assets/images/gallery/image6.jpg",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    display: { xs: "none", sm: "block" },
  },
  {
    img: "/assets/images/gallery/image7.jpg",
    display: { xs: "none", sm: "block" },
  },
  {
    img: "/assets/images/gallery/image8.jpg",
    display: { xs: "none", sm: "block" },
  },
  {
    img: "/assets/images/gallery/image9.jpg",
    rows: 2,
    cols: 2,
    display: { xs: "none", md: "block" },
  },
  {
    img: "/assets/images/gallery/image10.jpg",
    display: { xs: "none", md: "block" },
  },
  {
    img: "/assets/images/gallery/image11.jpg",
    display: { xs: "none", md: "block" },
  },
  {
    img: "/assets/images/gallery/image12.jpg",
    cols: 2,
    display: { xs: "none", md: "block" },
  },
];
