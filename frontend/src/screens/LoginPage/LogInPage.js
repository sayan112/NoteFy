import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../component/MainScreen";
import "./loginPage.css";
import Loading from "../../component/loading";
import ErrorMessage from "../../component/erormessage";
import {useDispatch, useSelector} from "react-redux";
import { login } from "../../actions/userAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const history= useHistory();
   const dispatch = useDispatch()
const userLogin=useSelector((state)=>state.UserLogin);
 const { userInfo,error,loading } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandeler = async (e) => {
    e.preventDefault();
     dispatch(login(email,password));
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
