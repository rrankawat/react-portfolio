import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='home'>
      <Carousel controls={false}>
        <Carousel.Item className='w-100'>
          <img
            className='d-block'
            src='https://wallpaperaccess.com/full/3594024.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block'
            src='https://wallpaperaccess.com/full/3594066.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block'
            src='https://cdn.hipwallpaper.com/i/70/31/felG7h.png'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
