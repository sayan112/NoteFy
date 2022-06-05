import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to NoteFy</h1>
              <p className="subtitle">Lets keep your all notes safe with us </p>
            </div>
            <div className="buttonContainer">
              <a href="./login">
                <Button size="lg" className="landingbuttonlogin">
                  Login
                </Button>
              </a>
              <a href="./register">
                <Button size="lg" className="landingbuttonSignup" variant='outline-primary'>
               SignUp
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
