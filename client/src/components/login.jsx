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
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="m-2">
          Login
        </Button>
        <Button onClick={handleGenerate} variant="secondary">
          Generate ID
        </Button>
      </Form>
    </Container>
  );
}
export default Login;
