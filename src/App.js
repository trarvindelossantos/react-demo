import React, { Component } from 'react';


import Header from './components/layout/Header';
import TaskCreate from './components/task/task-create.component';
import TaskList from './components/task/task-list.component';
import TaskEdit from './components/task/task-edit.component';

export default class App extends Component {

	states = {

	};
	constructor(props){
		super(props);
		this.tasks = [
            { id: 1, task: "Task 1", status: 0 }
        ];
		this.state = {
			id: "",
			task: "",
			status: "",
			on_edit: false,
			//task to be edited
			for_edit: null,
			for_edit_task: ""
			
		}

	}

	createTask = (task) => {
		this.setState({
			task: task,
		});
		const new_task = {
			id: this.tasks.length + 1,
			task: task,
			status: 0
		}
		this.tasks.push(new_task);
	}
	
	updateTaskStatus = (task_id) => {
		const task_status = this.tasks.map(task => {
			if (task.id === task_id){
				task.status = !task.status;
				return task.status
			}
			return null;
		});
		
		this.setState({
			status: task_status,
		});
	}

	deleteTask = (task_id) => {
		this.tasks.map((task, index) => {
			if(task.id === task_id) {
				this.tasks.splice(index, 1);
			}
			return this.tasks;
		});
		
		this.setState({
			id: null,
		});
	}

	toggleEdit = (editable) => {
		//toggle edit mode
		//if not editable null state
		if (!editable) {
			this.setState({
				for_edit: null,
				for_edit_task: ""
			});
		}
		//set to state to edit mode
		this.setState({
			on_edit: editable
		});
	}


	getTask = (id) => {
		let myTask = {};
		this.tasks.map( task => {
			if(task.id === id) {
				myTask.id = task.id;
				myTask.task = task.task
			}
			return true
		});
		
		this.setState({
			for_edit: myTask.id,
			for_edit_task: myTask.task,
		});
		console.log(this.state)
		
	}

	updateTask = (id, updated_task) => {
		this.tasks.map(task => {
			if (task.id === id){
				task.task = updated_task
				return true
			}
			return false;
		});
		this.setState({
			id: null,
			task: ""
		});

		this.toggleEdit(false);
	}

	render() {
		return (
			<div className="App">
				
				<Header />
				<div className="container">
					{ this.state.on_edit ? <TaskEdit updateTask={this.updateTask}  toggleEdit={this.toggleEdit} for_edit={this.state.for_edit} for_edit_task={this.state.for_edit_task} /> : <TaskCreate createTask={this.createTask} />}
					
				</div>
				<div className="container">
					<TaskList task_list={this.tasks} updateTaskStatus={this.updateTaskStatus} deleteTask={this.deleteTask} on_edit={this.state.on_edit} toggleEdit={this.toggleEdit} getTask={this.getTask}/>
				</div> 

			</div>
		);
	}
}


