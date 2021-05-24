import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { MdWork } from 'react-icons/md';
import { SiGooglescholar } from 'react-icons/si';
import { Header } from '../../components';
import { items, years } from './data.json';

const AboutScreen = () => {
  const [timeline, setTimeline] = useState(0);

  const updateTimeline = (e, index) => {
    e.preventDefault();

    setTimeline(index);
  };

  return (
    <>
      <Header title="About Me" />

      <section className="section">
        <Row>
          <Col md={{ span: 4, order: 1 }}>
            <Image
              src="https://img.freepik.com/free-vechrefr/man-shows-gesture-great-idea_10045-637.jpg?size=338&ext=jpg"
              alt="Me"
              className="me"
              thumbnail
            />
          </Col>
          <Col md={{ span: 7, offset: 1, order: 2 }}>
            <h5>Who Am I</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem expedita ipsam voluptatibus recusandae, ipsa nobis
              invenhrefre necessitatibus, nesciunt minus saepe perspiciatis nisi
              fugit neque ab vero veritatis commodi accusantium dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus nemo neque nihil deserunt temporibus eos ab
              consectetur ratione commodi incidunt repudiandae, numquam placeat
              molestiae dolore. Modi minus quos nulla qui hreftam vero
              praesentium facilis voluptatibus alias, cumque, beatae tenetur
              dolores.
            </p>
          </Col>
        </Row>
      </section>

      <section className="timeline">
        <Row className="p-0 m-0">
          <Col md={2}></Col>

          <Col md={{ span: 4, order: 2 }} className="pl-5 p-md-0 m-md-0 mb-5">
            <div className="timeline-years">
              <ul>
                {years.map((year, index) => (
                  <li key={index}>
                    <a
                      href="/#"
                      className={timeline === index ? 'active' : ''}
                      onClick={(e) => updateTimeline(e, index)}
                    >
                      {year.year}
                    </a>
                    {timeline === index ? (
                      !year.isWorkYear ? (
                        <SiGooglescholar size={26} className="timeline-icon" />
                      ) : (
                        <MdWork size={26} className="timeline-icon" />
                      )
                    ) : (
                      ''
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col md={{ span: 6, order: 1 }} className="p-0 m-0">
            <div className="timeline-content">
              <span>{items[timeline].year}</span>
              <h3>{items[timeline].designation}</h3>
              <p className="org">{items[timeline].org}</p>
              <p className="desc">{items[timeline].desc}</p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutScreen;
