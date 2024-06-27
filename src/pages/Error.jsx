// src/pages/Error.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = () => {
  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col className='mt-3'><h1>Error</h1></Col>
        </Row>
        <Row>
          <Col className="my-3">
            Content not found.
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Error;
