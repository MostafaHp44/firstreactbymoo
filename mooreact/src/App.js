import './App.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function App() {
  return (
   <div className='main'>
    <Container>
    <Form>
    <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text >
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
            </Form.Group>
    </Form>
        </Container>

   </div>
  );
}

export default App;
