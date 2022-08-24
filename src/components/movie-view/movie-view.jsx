import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './movie-view.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MovieView extends React.Component {
  addMovie(movie) {
    let username = localStorage.getItem('user');
    let token = localStorage.getItem('token');
    const notify = () =>
      toast.success('Movie has been added!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    axios
      .put(
        `https://my-flix-app-1910.herokuapp.com/users/${username}/movies/${movie._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    return notify();
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <>
        <Helmet>
          <title>{movie.Title}</title>
          <meta name="Movie title" content="Movie title" />
        </Helmet>
        <Row className="justify-content-md-center">
          <Col className="mt-5">
            <img style={{ maxWidth: '28rem' }} src={movie.ImageURL} />
          </Col>
          <Col className="mt-5">
            <Card>
              <Card.Header>
                <h5>{movie.Title}</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Description: {movie.Description}
                </ListGroup.Item>
                <ListGroup.Item>
                  Genre:{' '}
                  <Link to={`/genre/${movie.Genre.Name}`}>
                    {movie.Genre.Name}
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  Director:{' '}
                  <Link to={`/directors/${movie.Director.Name}`}>
                    {movie.Director.Name}
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>Year: {movie.Year}</ListGroup.Item>
              </ListGroup>
            </Card>
            <Button
              className="mt-2 button"
              variant="info"
              size="sm"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
            <Button
              onClick={() => {
                this.addMovie(movie);
              }}
              className="mt-2 ml-4 button"
              variant="info"
              size="sm"
            >
              Add to Favorite
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default MovieView;
