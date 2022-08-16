import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from '../movie-card/movie-card';

class DirectorView extends React.Component {
  render() {
    const { directorMovies, onBackClick, director } = this.props;

    return (
      <React.Fragment>
        <Row className="justify-content-md-center">
          <Col style={{ width: '35rem', margin: '16px' }}>
            <Card>
              <Card.Header>{director.Name}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{director.Bio}</ListGroup.Item>
              </ListGroup>
            </Card>

            <Button
              className="mt-2"
              size="sm"
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
            <h5 className="text-info">Directed Movies:</h5>
            <Card>
              <Card.Body>
                {directorMovies.map((movie) => (
                  <MovieCard key={movie._id} movie={movie}>
                    {movie.Title}
                  </MovieCard>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
  }).isRequired,
};
export default DirectorView;
