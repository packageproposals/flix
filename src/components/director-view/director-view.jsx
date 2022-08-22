import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import './director-view.scss';

class DirectorView extends React.Component {
  render() {
    const { directorMovies, onBackClick, director } = this.props;

    return (
      <React.Fragment>
        <Row className="justify-content-md-center">
          <Col style={{ width: '35rem', margin: '16px' }}>
            <Card>
              <Card.Header className="text-info">
                <h5>{director.Name}</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Bio: {director.Bio}</ListGroup.Item>
                <ListGroup.Item>Born: {director.Born}</ListGroup.Item>
                <ListGroup.Item>
                  Birth name: {director.BirthName}
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-5">
              <Card.Header>
                <h6>Directed Movies:</h6>
              </Card.Header>
              <ListGroup variant="flush">
                {directorMovies.map((movie) => (
                  <ListGroupItem key={movie._id} movie={movie}>
                    {movie.Title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>

            <Button
              className="mt-2 button"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
          </Col>
        </Row>

        {/* <Row className="justify-content-md-center">
          <Col>
            <p className="text-info">Directed Movies:</p>
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
        </Row> */}
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
