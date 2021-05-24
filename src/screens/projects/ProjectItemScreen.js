import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import { BiLayer } from 'react-icons/bi';

import { Header } from '../../components';

const ProjectItemScreen = () => {
  return (
    <>
      <Header title="Single Project" />

      <section className="section">
        <Carousel controls={false}>
          <Carousel.Item className="w-100">
            <img
              className="d-block"
              src="https://wallpaperaccess.com/full/3594024.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://wallpaperaccess.com/full/3594066.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://cdn.hipwallpaper.com/i/70/31/felG7h.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h5 className="mt-5">Project Title</h5>
        <Row>
          <Col md={8}>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              at earum tempora eligendi. Impedit rerum, maxime consequatur
              repellat molestiae corporis voluptas optio vel dicta dolorum
              error, unde delectus, dolore recusandae inventore quibusdam minus?
              Temporibus in distinctio alias ex animi, harum molestiae esse
              aperiam maxime quae amet exercitationem architecto ea quaerat.
            </p>
          </Col>
          <Col md={4}>
            <div className="project-detail mb-3">
              <h6 className="mb-1">Skills</h6>
              <span className="text">Design</span>
            </div>
            <div className="project-detail mb-3">
              <h6 className="mb-1">Technology</h6>
              <span className="text">React, HTML/CSS</span>
            </div>
            <div className="project-detail mb-3">
              <h6 className="mb-1">Demo</h6>
              <span className="text">http://example.com</span>
            </div>
            <div className="project-detail mb-3">
              <h6 className="mb-1">GitHub</h6>
              <span className="text">http://gitHub.com/rrankawat</span>
            </div>
          </Col>
        </Row>
      </section>

      <section className="pagination">
        <VscArrowLeft size={25} />
        <BiLayer size={25} />
        <VscArrowRight size={25} />
      </section>
    </>
  );
};

export default ProjectItemScreen;
