import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Container, Row, Col, Card, Button, Nav, Image} from 'react-bootstrap';
import './myjourney.css'

class About extends Component {
    render(){
        return(
            <div className="project-grid">
                <h1>Education & Work Experience</h1>
                &nbsp;
                <Container className="heading-container">
                    <Row>
                        <Col>
                            <p style={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
                </Container>
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
                        className="vertical-timeline-element--work"
                        date="Summer 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<i className="fa fa-suitcase fa-lg icon" aria-hidden="true"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Freelancing</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tallinn, EST</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<i className="fa fa-suitcase fa-lg icon" aria-hidden="true"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Junior Programmer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ninja Kiwi, CA</h4>
                        <p>
                        User Experience, Visual Design
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
                        BSc Applied Computing
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default About;