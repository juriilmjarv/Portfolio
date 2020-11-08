import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';
import profilepic from '../assets/pictures/DSC01233.jpg';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
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
            </div>
        )
    }
}

export default Landing;