import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoriteMoviesView from './favorite-movies-view';

function ProfileView(props) {
  const { onBackClick } = props;
  const [user, setUser] = useState(props.user);
  const thisUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const getUser = () => {
    axios
      .get(`https://my-flix-app-1910.herokuapp.com/users/${thisUser}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        setFavoriteMovies(response.data.FavoriteMovies);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = () => {
    axios
      .delete(`https://my-flix-app-1910.herokuapp.com/users/${thisUser}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert(`The account ${user.Username} was successfully deleted.`);
        localStorage.clear();
        window.open('/register', '_self');
      })
      .catch((error) => console.error(error));
  };

  const handleMovieDelete = (movieId) => {
    axios
      .delete(
        `https://movime-api.herokuapp.com/users/${thisUser}/movies/${movieId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        alert(`The movie was successfully deleted.`);
        window.open('/users/:username', '_self');
      })
      .catch((error) => console.error(error));
  };

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col style={{ width: '35rem', margin: '16px' }}>
          <Button
            className="mb-2"
            variant="info"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
          <Card>
            <Card.Header>{user.Name}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Username: {user.Username}</ListGroup.Item>
              <ListGroup.Item>Password: ****</ListGroup.Item>
              <ListGroup.Item>Email: {user.Email}</ListGroup.Item>
              <ListGroup.Item>Birthday: {user.Birthday}</ListGroup.Item>
            </ListGroup>
          </Card>

          <Link to={`/users-update/`}>
            <Button className="mt-2" variant="info">
              Update Profile
            </Button>
          </Link>

          <Button
            className="mt-2 ml-2"
            variant="warning"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete Profile
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ProfileView;
