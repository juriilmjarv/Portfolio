import React, {Component} from 'react';
import posts from '../../descriptions';


class Project extends Component {

    state ={
        name: null,
        id: null,
        description: null
    }

    componentDidMount(){
        let id = this.props.match.params.projectId;
        posts.map(p => {
            if(p.id === id){
                this.setState({
                    name: p.name,
                    id: p.id,
                    description: p.description
                })
            }
        })
        console.log(JSON.stringify(this.state.post));
    }

    render(){

        return (
        <div>
            <h3>{this.state.name}</h3>
            <h3>{this.state.id}</h3>
            <h3>{this.state.description}</h3>
        </div>
        );
    }
  }

  export default Project;