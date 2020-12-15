import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/landingpage'
import MyJourney from './MyJourney/myjourney';
import Projects from './Projects/projects';
import Resume from './Resume/resume'
import Project from './Project/project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/myjourney" component={MyJourney}/>
        <Route path="/projects/:projectId" component={Project}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;