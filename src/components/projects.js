import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import post from '../descriptions';
import {Container, Row, Col, Card, Button, Nav} from 'react-bootstrap';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { defaultActiveKey: 'React' };
  }

  //Loop through post data and return result based on active key
  getPostData(topic){
    return post.map(({ name, id, description }) => {
      if(id == topic){
        return (
          <Col sm  style={{padding: '10px'}}>
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
        )
      }
    })
  }

  toggleCategories(){
    if(this.state.defaultActiveKey == 'React'){
        return this.getPostData(this.state.defaultActiveKey)
    }else if(this.state.defaultActiveKey == 'PHP') {
      return this.getPostData(this.state.defaultActiveKey)
    } else if(this.state.defaultActiveKey == 'Swift') {
      return this.getPostData(this.state.defaultActiveKey)
    }
  }

    render(){
        return(
            
        <div className='project-grid'>
            <Container>
              <Nav variant="pills" defaultActiveKey="React" onSelect={(tabId) => this.setState({ defaultActiveKey: tabId })}>
                <Nav.Item>
                  <Nav.Link eventKey="React">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="PHP">PHP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Swift">
                    Swift
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
            <Container>
              <Row>
                {this.toggleCategories()}
              </Row>
            </Container>
        </div>

        )
    }
}

export default Projects;