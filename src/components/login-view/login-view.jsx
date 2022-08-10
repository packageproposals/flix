import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Card border="info" style={{ width: '35rem', margin: '25vh' }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your username"
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                />
              </Form.Group>

              <Button
                variant="outline-info"
                className="m-2"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Button
                variant="info"
                className="m-2"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};

export default LoginView;
