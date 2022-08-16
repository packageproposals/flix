import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from '../movie-card/movie-card';

class GenreView extends React.Component {
  render() {
    const { genre, onBackClick, genreMovies } = this.props;

    return (
      <React.Fragment>
        <Row className="justify-content-md-center">
          <Col style={{ width: '35rem', margin: '16px' }}>
            <Card>
              <Card.Header>{genre.Name}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{genre.Description}</ListGroup.Item>
              </ListGroup>
            </Card>

            <Button
              className="mt-2"
              variant="info"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <h5 className="text-info">More movies with {genre.Name} genre:</h5>
            <Card>
              <Card.Body>
                <Col>
                  {genreMovies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie}>
                      {movie.Title}
                    </MovieCard>
                  ))}
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};

export default GenreView;
