import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "#fff",
  },
});

const Service = ({ service }) => {
  const { _id, title, image_url, desc, price } = service;
  const classes = useStyles();
  const history = useHistory();
  const handleDetails = (id) => {
    history.push(`/service/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345, textAlign: "left" }} className={classes.root}>
      <CardMedia component="img" height="140" image={image_url} alt="drone" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#7e8285", fontSize: "14px", lineHeight: "25px", mb: 2 }}
        >
          {desc.slice(1, 100)}
        </Typography>
        <Typography variant="subtitle2" color="text.success">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="lg"
          fullWidth
          variant="contained"
          onClick={() => handleDetails(_id)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Service;
