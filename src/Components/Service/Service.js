import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
   const {id,name,price,image} =props.service
    return (
       
            <div className='col-4  '>
           <Card className='service shadow' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>{price}/Hr</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Schedule a Date</Button>
  </Card.Body>
</Card>
        </div>
       
    );
};

export default Service;