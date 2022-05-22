import React from "react";
import { Jumbotron } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron>
    <h1>Image Gallery</h1>
    <p>
      This is simple application that retrieves photo using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
