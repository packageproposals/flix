import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './profile-view.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FavoriteMoviesView(props) {
  const { movies, favoriteMovies, thisUser, token } = props;

  const favoriteMoviesList = movies.filter((m) => {
    return favoriteMovies.includes(m._id);
  });

  const handleMovieDelete = (movieId) => {
    const notify = () =>
      toast.success('Movie has been removed!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    axios
      .delete(
        `https://my-flix-app-1910.herokuapp.com/users/${thisUser}/movies/${movieId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        window.open('/users/' + thisUser, '_self');
      })
      .catch((error) => console.error(error));

    return notify();
  };

  return (
    <Fragment>
      {favoriteMoviesList.length === 0 ? (
        <p>You have no favorite movies.</p>
      ) : (
        favoriteMoviesList.map((movie) => {
          return (
            <Row>
              <Col>
                <Card className="fav-card">
                  <Link to={`/movies/${movie._id}`}>
                    <Card.Img
                      variant="top"
                      src={movie.ImageURL}
                      style={{ height: '20rem' }}
                    />
                  </Link>

                  <Card.Body>
                    <Card.Title>
                      <h6>{movie.Title}</h6>
                    </Card.Title>
                    <Link to={`/movies/${movie._id}`}>
                      <Button size="sm" className="button">
                        Open
                      </Button>
                    </Link>
                    <Button
                      className="ml-2 delete-button"
                      variant="info"
                      size="sm"
                      onClick={() => {
                        handleMovieDelete(movie._id);
                      }}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })
      )}
    </Fragment>
  );
}
