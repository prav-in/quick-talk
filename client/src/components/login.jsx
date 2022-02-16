import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 } from "uuid";

function Login({ setId }) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(idRef.current.value);
    setId(idRef.current.value);
  };

  const handleGenerate = () => {
    setId(v4());
  };

  return (
    <Container
      className="align-items-center justify-content-center flex-column d-flex"
      style={{ height: "100vh" }}
    >
      <div>
        <img
          style={{ height: "120px" }}
          src={require("../images/quickTalk.png")}
          alt=""
        />

        <h1 className="font-weight-bold mb-5">
          <span style={{ color: "#ffc40c" }}>Quick</span> Talk
        </h1>
      </div>
      <div
        className="align-items-center justify-content-center d-flex"
        style={{
          width: "500px",
          height: "300px",
          boxShadow: "0 0 15px lightgray",
          background: "#5a95f5",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="text-white font-weight-bold">
              Enter Your ID
            </Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Button variant="warning" type="submit" className="m-2">
            Login
          </Button>
          <Button onClick={handleGenerate} variant="secondary">
            Generate ID
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default Login;
