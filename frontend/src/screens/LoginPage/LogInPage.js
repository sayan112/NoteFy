import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../component/MainScreen";
import "./loginPage.css";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

 const submitHandeler =(e)=>{
      e.preventDefault();
     console.log(email,password);
 }

  return (
    <MainScreen title="Login">
      <div className="loginContainer">
        <Form onSubmit={submitHandeler} >
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>Email addresss</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <FormGroup controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
               value={password}
              placeholder="Password"
              onChange={(e) => setPassword (e.target.value)}
            />
          </FormGroup>
          <Button variant="primary" type="submit" style={{ marginTop: 10 }}>
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here 😁</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LogInPage;
