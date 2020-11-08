import React, {Component} from 'react';
import profilepic from '../assets/pictures/DSC01233.jpg';
import {Container, Row, Col, Image} from 'react-bootstrap';

class Landing extends Component {
    render(){
        return(
            <div className="landing-grid">
                <Container >
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}><Image className='circular--portrait'src={profilepic} roundedCircle></Image></Col>
                    </Row>
                    <Row>
                    <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native</p>

                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Row>
                </Container>
                {/*
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className='circular--portrait'>
                            <img 
                                src={profilepic}
                                alt="avatar"
                            />
                        </div>

                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native</p>

                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                        
                    </Cell>

                </Grid>
                */}
            </div>
        )
    }
}

export default Landing;