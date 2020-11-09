import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './landingpage'
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume'
import Project from './project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects/:projectId" component={Project}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;