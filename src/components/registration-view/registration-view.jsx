import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

function RegistrationView(props) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, username, password, birthday);
    props.onRegistration(username);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Card border="info" style={{ width: '35rem', margin: '25vh' }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                />
              </Form.Group>

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

              <Form.Group controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Form.Group>
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

RegistrationView.propTypes = {
  register: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  }),
};

export default RegistrationView;
