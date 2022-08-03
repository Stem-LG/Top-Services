import {
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
} from "@mui/material";

function Services(props) {
  let data = [
    {
      img: "/assets/images/services/lawnmower.jpg",
      img_alt: "lawn_mower",
      img_pos: "0 50%",
      title: "Lawn Mowing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
    },
    {
      img: "/assets/images/services/lawnmower.jpg",
      img_alt: "lawn_mower",
      img_pos: "0 80%",
      title: "Lawn Mowing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
    },
    {
      img: "/assets/images/services/lawnmower.jpg",
      img_alt: "lawn_mower",
      img_pos: "0 100%",
      title: "Lawn Mowing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!",
    },
  ];
  return (
    <Box display={{ xs: "none", md: "block" }} width="100%" margin={props.margin}>
      <Typography variant="h3" color="primary" align="center" marginBottom={5}>Our Services</Typography>
      <Services_normal data={data}/>
    </Box>
  );
}

function Services_normal(props) {
  return (
    <Grid container align="center" justifyContent="space-evenly">
      {props.data.map((s,key) => (
        
        <Service_normal
          key={key}
          img={s.img}
          img_alt={s.img_alt}
          img_pos={s.img_pos}
          title={s.title}
          description={s.description}
        />
      ))}
    </Grid>
  );
}

function Service_normal(props) {
  return (
    <Card sx={{maxWidth:300}} key={props.key}>
      <CardActionArea>
        <CardMedia
          sx={{
            objectPosition: props.img_pos,
          }}
          component="img"
          height="280"
          image={props.img}
          alt={props.img_alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Services;
