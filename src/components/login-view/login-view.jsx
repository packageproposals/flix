import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { setUser } from '../../actions/actions';
import './login-view.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username Required');
      isReq = false;
    } else if (username.length < 4) {
      setUsernameErr('Username must be 4 characters long');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password Required');
      isReq = false;
    } else if (password.length < 6) {
      setPassword('Password must be 6 characters long');
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post('https://my-flix-app-1910.herokuapp.com/login', {
          Username: username,
          Password: password,
        })
        .then((response) => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          console.log('no such user');
        });
      alert('Logging in ..');
    }
  };

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h4>Please Log in</h4>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card className="login-card">
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
                  {usernameErr && <p>{usernameErr}</p>}
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                  />
                  {passwordErr && <p>{passwordErr}</p>}
                </Form.Group>

                <Button
                  variant="info"
                  className="mt-2 login-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

LoginView.propTypes = {
  // user: PropTypes.shape({
  //   username: PropTypes.string.isRequired,
  //   password: PropTypes.string.isRequired,
  // }),
  onLoggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setUser })(LoginView);
