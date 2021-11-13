import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import reviewBG from "../../../images/review_bg.jpg";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://obscure-crag-25487.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center">Testimonials</h2>
      <h6 className="text-center mb-4">Look what out client said about us</h6>
      <Carousel className="bg-success" variant="dark">
        {reviews.map((review) => (
          <Carousel.Item key={review._id}>
            <img className="d-block w-100" src={reviewBG} alt="First slide" />
            <Carousel.Caption>
              <p>{review.review}</p>
              <h6>- {review.name}</h6>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
