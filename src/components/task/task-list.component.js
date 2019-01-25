import React, {Component} from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task_id: 0,
            task_name: "",
            disabled: false,
            tasks: props.task_list,
            on_edit: false
        };
        
    }

    handleChange = (evt)  => {
        // Target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
    } 

    taskStatus = (status) => {
		if (status) {
			return "tag is-success";
		}
		return "tag is-warning";
    }
    
    updateTaskStatus = (task_id) => {
        this.setState({
            id: task_id
        });
        this.props.updateTaskStatus(task_id);
        this.setState({
            on_edit: true
        });
    }

    deleteTask = (task_id) => {
        this.setState({
            task_id: task_id
        });
        this.props.deleteTask(task_id);
    }

    toggleEdit = (task_id) => {
        this.props.toggleEdit(true);
        this.props.getTask(task_id);
        
        
    }

    render() {
        return(
            <div className="column">
                <h3>Pending Tasks: </h3>
                <table className="table is-fullwidth is-hoverable" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody disabled={this.state.on_edit}>
                        {
                            this.state.tasks.map((task) => { //map through tasks
                                return (
                                    <tr key={task.id} >
                                        <td>{task.id}</td>
                                        <td>{task.task}</td>
                                        <td>
                                            <label className={this.taskStatus(task.status)}>{task.status ? "COMPLETE" : "PENDING"}</label>
                                        </td>
                                        <td>
                                            { task.status ? 
                                                ( <button onClick={() => this.updateTaskStatus(task.id)} type="button" className="button is-small is-warning">Undo Task</button> ) :
                                                ( <button onClick={() => this.updateTaskStatus(task.id)} type="button" className="button is-small is-primary">Finish Task</button> ) 
                                            }
                                            
                                            &nbsp;
                                            {!task.status ? (<button onClick={ () => this.toggleEdit(task.id) } type="button" className="button is-small is-warning">Edit</button>) : ""}
                                            &nbsp;
                                            {/* <button onClick={ () => this.deleteTask(task.id) } type="button" className="button is-small is-danger">Delete</button> */}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;