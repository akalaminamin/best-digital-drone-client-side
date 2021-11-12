import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Rating,
  Box,
  CardMedia,
  Avatar,
} from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { currentUser } = useAuth();
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/review`).then((res) => {
      setUserReview(res.data);
    });
  }, []);
  console.log(currentUser);
  return (
    <div>
      <Box>
        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          What Our customer says
        </Typography>
      </Box>
      <Grid container spacing={1} sx={{ my: 5 }}>
        {userReview.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review._id}>
            <Card sx={{ maxWidth: 345, textAlign: "left" }}>
            
              <CardContent component="div">
                <Typography gutterBottom variant="h5">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.reviewText}
                </Typography>
                <Rating
                  name="size-large"
                  defaultValue={review.rating}
                  size="large"
                  readOnly
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Review;
