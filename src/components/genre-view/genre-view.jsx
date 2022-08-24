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
import { Helmet } from 'react-helmet';
import './genre-view.scss';

class GenreView extends React.Component {
  render() {
    const { genre, onBackClick, genreMovies } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>{genre.Name}</title>
          <meta name="Profile" content="Profile view" />
        </Helmet>
        <Row className="justify-content-md-center">
          <Col style={{ width: '35rem', margin: '16px' }}>
            <Card>
              <Card.Header>
                <h5>{genre.Name}</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{genre.Description}</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-5">
              <Card.Header>
                <h6>More movies with {genre.Name} genre:</h6>
              </Card.Header>
              <ListGroup variant="flush">
                {genreMovies.map((movie) => (
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
