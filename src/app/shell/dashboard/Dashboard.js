import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Dashboard.css';

export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <br/>
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <br/>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://woz-u.com/wp-content/uploads/2019/09/fron-end-development-icon-2.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://woz-u.com/wp-content/uploads/2019/09/big-data-program-icon.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://woz-u.com/wp-content/uploads/2019/09/fron-end-development-icon-2.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://woz-u.com/wp-content/uploads/2019/09/big-data-program-icon.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
