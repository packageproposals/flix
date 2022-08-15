import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class GenreView extends React.Component {
  render() {
    const { genre, onBackClick } = this.props;

    return (
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
