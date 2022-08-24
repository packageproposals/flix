import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FavoriteMoviesView } from './favorite-movies-view';
// import { setUser } from '../../actions/actions';
// import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';

import './profile-view.scss';

function ProfileView(props) {
  const { onBackClick, movies } = props;
  const [user, setUser] = useState(props.user);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
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
    const notify = () =>
      toast.success('The account was successfully deleted!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    axios
      .delete(`https://my-flix-app-1910.herokuapp.com/users/${thisUser}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        localStorage.clear();
        window.open('/register', '_self');
      })
      .catch((error) => console.error(error));

    return notify();
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{user.Username + 's profile'}</title>
        <meta name="Profile" content="Profile view" />
      </Helmet>
      <Row className="justify-content-md-center">
        <Col style={{ width: '35rem', margin: '16px' }}>
          <Button
            className="mb-2 button"
            variant="info"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
          <Link to={`/users-update/`}>
            <Button className="mb-2 ml-2 button" variant="info">
              Update Profile
            </Button>
          </Link>

          <Button
            className="mb-2 ml-2 delete-button"
            variant="warning"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete Profile
          </Button>
          <Card className="card-info">
            <Card.Header className="header">
              <h5>{user.Name}</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Username: {user.Username}</ListGroup.Item>
              <ListGroup.Item>Password: ****</ListGroup.Item>
              <ListGroup.Item>Email: {user.Email}</ListGroup.Item>
              <ListGroup.Item>Birthday: {user.Birthday}</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className="card-movies">
            <Card.Header className="header">
              <h5>Favorite Movies</h5>
            </Card.Header>
            <Card.Body className="card-movies-body">
              <FavoriteMoviesView
                movies={movies}
                favoriteMovies={favoriteMovies}
                thisUser={thisUser}
                token={token}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

// let mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

export default ProfileView;
