import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
