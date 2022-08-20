import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './movie-card.scss';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="movie-card" style={{ width: '15rem', margin: '10px' }}>
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
            <Button className="card-button">View</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
