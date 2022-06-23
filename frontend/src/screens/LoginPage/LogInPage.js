import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../component/MainScreen";
import "./loginPage.css";
import axios from "axios";
import Loading from "../../component/loading";
import ErrorMessage from "../../component/erormessage";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandeler = async (e) => {
    e.preventDefault();
    //  just for check
    console.log(email, password);
    // now its time to call api

    try {

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
       console.log(data);

 localStorage.setItem('userInfo',JSON.stringify(data) );

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
         setLoading(false);
    }
  };

  return (
    <MainScreen title="Login">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

        {loading && <Loading />}

        <Form onSubmit={submitHandeler}>
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
            <Form.Label style={{ marginTop: 6 }}>Password</Form.Label>

            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <Button variant="primary" type="submit" style={{ marginTop: 10 }}>
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col style={{ fontSize: 20 }}>
            New User 🤔💭 ?{" "}
            <Link style={{ marginLeft: 10 }} to="/register">
              Register Here 😁
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LogInPage;
