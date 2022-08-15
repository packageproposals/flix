import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
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

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
  }).isRequired,
};
export default DirectorView;
