import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel className=' banner '>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://i.ibb.co/tmXfcwW/service1-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sales Training for new Employees</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/9tcHr0Q/service2-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Annual Sales Analysis</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/KGxVvRG/service3-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Basic Sales Taraining for Non-sales Employees</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;