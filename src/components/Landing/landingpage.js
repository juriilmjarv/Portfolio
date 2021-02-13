import React, {Component} from 'react';
import profilepic from '../../assets/pictures/profilepic1.jpg';
import resume from '../../assets/resume/cv.pdf'
import {Container, Row, Col, Image, Button, Card, CardDeck, ProgressBar} from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import FlipCard from 'react-flipcard';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import config from '../../config';
import './landingpage.css'


class Landing extends Component {
    render(){
        return(
            <div className="landing-grid">
                <ReactFullpage
                    //fullpage options
                    licenseKey = {config.FULLPAGE_API_KEY}
                    scrollingSpeed = {1000} /* Options here */

                    render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                        <div className="section">
                        <Container>
                            <Row>
                                <div className='intro'>
                                    <h1>I'M JURI ILMJARV</h1>
                                    <p>Software Developer from Tallinn, currently in Edinburgh.</p>
                                </div>
                            </Row>
                        </Container>
                        <div className="downArrow bounce">
                            <button onClick={() => fullpageApi.moveSectionDown()} style={{backgroundColor: 'transparent', border: 'none'}}>
                            <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
                            </button>
                        </div>
                        </div>
                        <div className='section'>
                            <Container className='aboutContainer'>
                                <Row>
                                    <Col sm={4}><Image className='roundedCircle center' src={profilepic} /></Col>
                                    <Col sm={8} className='about-intro'>
                                        <h3>About Me</h3>
                                        <p>Postgraduate Software Engineering student with a demonstrated history of working in the internet industry. Skilled in PHP (Symfony & Laravel frameworks), TDD, continuous integration, WordPress, Linux System Administration, and Application Programming Interfaces.</p>
                                        <p>Strong engineering professional with a Licence focused in Web Development from Université Claude Bernard Lyon 1.</p>
                                        <p>My favourite technologies: React, React Native, PHPUnit, PHPQA, Micro-services, Docker, ReactJS, ReactNative with continuous integration on Gitlab.</p>
                                        <Button className='float-left about-btn' variant="success" style={{borderRadius: '0px'}} href={resume} target='_blank'>Resume</Button>
                                        <Button className='float-left about-btn' style={{borderRadius: '0px'}} href="mailto:juura.ilmjarv@gmail.com">Contact</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className='section'>
                            <h1 className='languages-header'>Education </h1>
                            <VerticalTimeline className="textcolor">
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="2020 - 2021"
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={<i className="fa fa-graduation-cap fa-lg icon" aria-hidden="true"/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Heriot-Watt University</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Edinburgh, UK</h4>
                                    <p>
                                    MSc Software Engineering
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="2016 - 2020"
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={<i className="fa fa-graduation-cap fa-lg icon" aria-hidden="true"/>}
                                >
                                    <h3 className="vertical-timeline-element-title">University of Dundee</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Dundee, UK</h4>
                                    <p>
                                    BSc (Hons) Applied Computer Science
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>
                        <div className='section'>
                            <Container style={{color: 'black'}}>
                                <h1 className='languages-header'>I could say I am good at</h1>
                                <CardDeck>
                                        <Card className="card-centered">
                                            <span style={{color: '#F0DB4F', padding: '10px'}}>
                                                <i className="fab fa-js fa-4x" aria-hidden="true"/>
                                            </span>
                                            <Card.Body>
                                            <Card.Title style={{color: '#F0DB4F'}}>JavaScript</Card.Title>
                                            <Card.Text>
                                                <span>ReactJS</span>
                                                <br></br>
                                                <span>React Native</span>
                                                <br></br>
                                                <span>ES6</span>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className="card-centered">
                                            <span style={{color: '#787CB5', padding: '10px'}}>
                                                <i className="fab fa-php fa-4x" aria-hidden="true"/>
                                            </span>
                                            <Card.Body>
                                            <Card.Title style={{color: '#787CB5'}}>PHP</Card.Title>
                                            <Card.Text>
                                                <span>Wordpress</span>
                                                <br></br>
                                                <span>Backend</span>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className="card-centered">
                                            <span style={{color: '#787CB5', padding: '10px'}}>
                                                <i className="fas fa-database fa-4x" aria-hidden="true"/>
                                            </span>
                                            <Card.Body>
                                            <Card.Title style={{color: '#787CB5'}}>Databases</Card.Title>
                                            <Card.Text>
                                                <span>MySQL</span>
                                                <br></br>
                                                <span>PostgreSQL</span>
                                                <br></br>
                                                <span>Realtime Database</span>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className="card-centered">
                                            <span style={{color: '#787CB5', padding: '10px'}}>
                                                <i className="fas fa-ellipsis-h fa-4x" aria-hidden="true"/>
                                            </span>
                                            <Card.Body>
                                            <Card.Title style={{color: '#787CB5'}}>Others</Card.Title>
                                            <Card.Text>
                                                <span>Java</span>
                                                <br></br>
                                                <span>Swift</span>
                                                <br></br>
                                                <span>Bootstrap</span>
                                                <br></br>
                                                <span>REST API</span>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                </CardDeck>
                            </Container>
                        </div>
                        <div className="section">
                            <Container >
                                <h1 className='languages-header' style={{textAlign: 'left'}}>I can speak</h1>
                                <Row>
                                    <Col md={3} className='col-centered'>
                                        <h5 className='progress-title'>ESTONIAN</h5>
                                        <p style={{textAlign:'left'}}>Native</p>
                                    </Col>
                                    <Col md={9}>
                                        <ProgressBar animated now={100}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} className='col-centered'>
                                        <h5 className='progress-title'>RUSSIAN</h5>
                                        <p style={{textAlign:'left'}}>Native</p>
                                    </Col>
                                    <Col md={9}>
                                        <ProgressBar animated now={90}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} className='col-centered'>
                                        <h5 className='progress-title'>ENGLISH</h5>
                                        <p style={{textAlign:'left'}}>Professional working proficiency</p>
                                    </Col>
                                    <Col md={9}>
                                        <ProgressBar animated now={70}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} className='col-centered'>
                                        <h5 className='progress-title'>GERMAN</h5>
                                        <p style={{textAlign:'left'}}>Elementary proficiency</p>
                                    </Col>
                                    <Col md={9}>
                                        <ProgressBar animated now={30}/>
                                    </Col>
                                </Row>
                                
                                
                            </Container>
                        </div>
                        <div className="section">
                            <Container>
                                <Row style={{textAlign: 'left'}}>
                                    <Col md={2}>
                                        <FlipCard>
                                            {/* The first child is used as the front of the card */}
                                            <div className='square'>
                                                <i className="fab fa-php fa-4x" aria-hidden="true"/>
                                            </div>
                                            {/* The second child is used as the back of the card */}
                                            <div className='square'>Back</div>
                                        </FlipCard>
                                    </Col>
                                    <Col md={2}>
                                        <FlipCard>
                                            {/* The first child is used as the front of the card */}
                                            <div className='square'>
                                                <i className="fab fa-php fa-4x" aria-hidden="true"/>
                                            </div>
                                            {/* The second child is used as the back of the card */}
                                            <div className='square'>Back</div>
                                        </FlipCard>
                                    </Col>
                                    <Col md={2}>
                                        <FlipCard>
                                            {/* The first child is used as the front of the card */}
                                            <div className='square'>
                                                <i className="fab fa-php fa-4x" aria-hidden="true"/>
                                            </div>
                                            {/* The second child is used as the back of the card */}
                                            <div className='square'>Back</div>
                                        </FlipCard>
                                    </Col>
                                    <Col md={2}>
                                        <FlipCard>
                                            {/* The first child is used as the front of the card */}
                                            <div className='square'>
                                                <i className="fab fa-php fa-4x" aria-hidden="true"/>
                                            </div>
                                            {/* The second child is used as the back of the card */}
                                            <div className='square'>Back</div>
                                        </FlipCard>
                                    </Col>
                                    <Col md={2}>
                                        <FlipCard>
                                            {/* The first child is used as the front of the card */}
                                            <div className='square'>
                                                <i className="fab fa-php fa-4x" aria-hidden="true"/>
                                            </div>
                                            {/* The second child is used as the back of the card */}
                                            <div className='square'>Back</div>
                                        </FlipCard>
                                    </Col>
                                    <Col md={2}>
                                        <FlipCard>
                                            {/* The first child is used as the front of the card */}
                                            <div className='square'>
                                                <i className="fab fa-php fa-4x" aria-hidden="true"/>
                                            </div>
                                            {/* The second child is used as the back of the card */}
                                            <div className='square'>Back</div>
                                        </FlipCard>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="section">
                            <Container>
                                <Row className='justify-content-center'>
                                    <Button className='float-left about-btn btn-size' style={{borderRadius: '0px'}} onClick={() => fullpageApi.moveTo()}>Back to top ↑</Button>
                                </Row>
                                <Row className='justify-content-center'>
                                    <Button className='float-left about-btn btn-size' variant="success" style={{borderRadius: '0px'}} href={'/projects'}>My projects</Button>
                                </Row>
                                <Row className='justify-content-center'>
                                    <Button className='float-left about-btn btn-size' variant="success" style={{borderRadius: '0px'}} href={resume} target='_blank'>Resume</Button>
                                </Row>
                                <Row className='justify-content-center'>
                                    <Button className='float-left about-btn btn-size' variant="success" style={{borderRadius: '0px'}} href={'/myjourney'}>My journey</Button>
                                </Row>
                            </Container>
                        </div>
                        </ReactFullpage.Wrapper>
                    );
                    }}
                />

            </div>
        )
    }
}

export default Landing;