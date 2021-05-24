import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { Header } from '../../components';

const ContactScreen = () => {
  return (
    <>
      <Header title="Contact Me" />

      <section className="section">
        <Row>
          <Col lg={4}>
            <div className="mail">
              <h6>Address</h6>
              <span>Noida, India</span>

              <h6>Phone</h6>
              <span>+91-9610167886</span>

              <h6>Email</h6>
              <span>rakesh.rankawat@outlook.com</span>
            </div>
          </Col>

          <Col lg={8}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} sm={6}>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="*Name"
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} sm={6}>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="*Email"
                  ></Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="contactSubject">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Subject"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="contactMessage">
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={5}
                  placeholder="*Message"
                ></Form.Control>
              </Form.Group>

              <Button className="w-100">Send</Button>
            </Form>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContactScreen;
