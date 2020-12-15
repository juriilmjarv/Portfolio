import React, {Component} from 'react';
import profilepic from '../../assets/pictures/DSC01233.jpg';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';

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
                        <div class="downArrow bounce">
                            <button onClick={() => fullpageApi.moveSectionDown()} style={{backgroundColor: 'transparent', border: 'none'}}>
                            <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
                            </button>
                        </div>
                        </div>
                        <div className="section">
                            <Container className="heading-container">
                                <Row>
                                    <Col>
                                        <p style={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </Col>
                                </Row>
                            </Container>
                            <VerticalTimeline>
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
                        <div className="section">
                            <p>Section 3</p>
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