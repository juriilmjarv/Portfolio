import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import post from '../descriptions';
import { Tabs, Tab, Grid, Cell, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
import {Container, Row, Col, Card, Button, Nav} from 'react-bootstrap';


class Projects extends Component {

   
    render(){
        return(
            
        <div className='project-grid'>
          <h1>Projects</h1>
            <Container>
              <Nav variant="pills" defaultActiveKey="1" onSelect={(tabId) => console.log(tabId)}>
                <Nav.Item>
                  <Nav.Link eventKey="1">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">PHP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">
                    Swift
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
            <Container>
              <Row>
                {post.map(({ name, id, description }) => (
                  <Col  style={{padding: '10px'}}>
                    <Card className="card-centered">
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>{id}</Card.Title>
                        <Card.Text>
                          {description}
                        </Card.Text>
                        <Button href={'/projects/' + id} variant="primary">Go to project</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

            </Container>
        </div>

        )
    }
}

export default Projects;