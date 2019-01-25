import React, {Component} from 'react';

class TaskCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            on_edit: false,
            task: "",
        };
    }
    
    createTask = () => {
        const task = this.state.task;
        this.props.createTask(task);
        this.setState({
            task: ""
        });
        
    }

    handleChange = (evt)  => {
        // Target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
    } 
    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <div className="column">
                        <div className="field">
                            <label className="label">Create Task</label>
                            <div className="control">
                                <input className="input" name="task" onChange={this.handleChange} value={this.state.task} />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="button" className="button is-link" onClick={this.createTask}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );    
    }
}

export default TaskCreate; 