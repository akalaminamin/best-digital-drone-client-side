import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Rating,
  Box,
  Divider,
  Container,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import reviewBg from "../../../Images/drone-dotted-map-1.png";
const useStyles = makeStyles({
  root: {
    background: `#f7f7f7 url(${reviewBg}) no-repeat center / cover`,
  },
});
const Review = () => {
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/review`).then((res) => {
      setUserReview(res.data);
    });
  }, []);
  const classes = useStyles();
  return (
    <Box sx={{ py: 10 }} className={classes.root}>
      <Container>
        <Box>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            what client says
          </Typography>
          <Divider
            sx={{
              width: "100px",
              height: "4px",
              background: "red",
              mx: "auto",
              mt: 3,
            }}
          />
        </Box>
        <Grid container spacing={1} sx={{ my: 5 }}>
          {userReview.map((review) => (
            <Grid item xs={12} sm={6} md={4} key={review._id}>
              <Card
                sx={{
                  maxWidth: 345,
                  textAlign: "left",
                  background: "rgba(255,255,255,0.8)",
                  p: 3,
                }}
                elevation={0}
              >
                <FormatQuoteIcon
                  sx={{
                    mr: "auto",
                    fontSize: "60px",
                    color: "#e50a25",
                    display: "block",
                  }}
                />

                <Rating defaultValue={review.rating} size="large" readOnly />
                <CardContent component="div">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: "15px",
                      lineHeight: "25px",
                      fontWeight: "400",
                      color: "#6f6f6f",
                      mb: 2,
                    }}
                  >
                    {review.reviewText.slice(0, 100)}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    {review?.photo ? (
                      <Avatar
                        sx={{ width: 40, height: 40, mr: 1 }}
                        src={review?.photo}
                      />
                    ) : (
                      <>
                        <Avatar sx={{ width: 40, height: 40, mr: 1 }} />
                      </>
                    )}
                    <Box>
                      <Typography gutterBottom variant="h6" sx={{mb:0}}>
                        {review.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#4e4e4e",
                        }}
                      >
                        {review.position || "CEO"}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Review;
