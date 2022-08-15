import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Row className="justify-content-md-center">
        <Col style={{ maxWidth: '35rem', margin: '16px' }}>
          <img src={movie.ImageURL} />
        </Col>
        <Col style={{ width: '35rem', margin: '16px' }}>
          <Card>
            <Card.Header>Title: {movie.Title}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Description: {movie.Description}</ListGroup.Item>
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
