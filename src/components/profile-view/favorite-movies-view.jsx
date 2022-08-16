import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Card, Col } from 'react-bootstrap';

export function FavoriteMoviesView(props) {
  const { movies, favoriteMovies, thisUser, token } = props;

  const favoriteMoviesList = movies.filter((m) => {
    return favoriteMovies.includes(m._id);
  });

  const handleMovieDelete = (movieId) => {
    axios
      .delete(
        `https://my-flix-app-1910.herokuapp.com/users/${thisUser}/movies/${movieId}`,
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
    <Fragment>
      {favoriteMoviesList.length === 0 ? (
        <p>You have no favorite movies.</p>
      ) : (
        favoriteMoviesList.map((movie) => {
          return (
            <Col xs={10} sm={8} md={6} lg={4}>
              <Card border="info" style={{ width: '15rem', margin: '10px' }}>
                <Link to={`/movies/${movie._id}`}>
                  <Card.Img
                    variant="top"
                    src={movie.ImageURL}
                    style={{ height: '20rem' }}
                  />
                </Link>

                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Genre.Name}</Card.Text>
                  <Link to={`/movies/${movie._id}`}>
                    <Button size="sm" variant="info">
                      Open
                    </Button>
                  </Link>
                  <Button
                    className="ml-2"
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
          );
        })
      )}
    </Fragment>
  );
}
