import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import post from '../descriptions';
import {Container, Row, Col, Card, Button, Nav} from 'react-bootstrap';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { defaultActiveKey: 1 };
  }

  toggleCategories(){
    if(this.state.defaultActiveKey == 1){
      return(
        post.map(({ name, id, description }) => (
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
        ))
      )
    }else if(this.state.defaultActiveKey == 2) {
      return (
        <div><h1>This is PHP</h1></div>
      )
    } else if(this.state.defaultActiveKey == 3) {
      return (
        <div><h1>This is Swift</h1></div>
      )
    }
    console.log(this.state.defaultActiveKey);
  }

    render(){
        return(
            
        <div className='project-grid'>
            <Container>
              <Nav variant="pills" defaultActiveKey="1" onSelect={(tabId) => this.setState({ defaultActiveKey: tabId })}>
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
                {this.toggleCategories()}
                {/*
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
                */}
              </Row>

            </Container>
        </div>

        )
    }
}

export default Projects;