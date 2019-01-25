import React, { Component } from 'react';

class TaskEdit extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: props.for_edit,
            task: props.for_edit_task,
            on_edit: props.on_edit
        };
    }

    handleChange = (evt)  => {
        // Target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
    } 

    toggleEdit = () => {
        this.props.toggleEdit(false);
    }

    updateTask = (id, task) => {
        this.props.updateTask(id, task);
        this.toggleEdit();
    }

    render() {
        
        return (
            <React.Fragment>
                <div className="container">
                    <div className="column">
                        <div className="field">
                            <label className="label">Update Task {this.state.id}</label>
                            <div className="control">
                                <input className="input" name="task" onChange={this.handleChange} value={this.state.task} />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="button" className="button is-warning" onClick={ () => this.updateTask(this.state.id, this.state.task) }>Update</button>
                                &nbsp;
                                <button type="button" className="button is-secondary" onClick={this.toggleEdit}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TaskEdit;