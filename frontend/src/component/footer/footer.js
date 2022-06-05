import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const footer = () => {
  return (
    <>
      <footer
        style={{
          width: "100%",
          position: "relative",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      ></footer>

      <Container>
        <Row>
          <Col className=" text-center py-3">copyright &copy; NoteFy</Col>
        </Row>
      </Container>
    </>
  );
};

export default footer;
