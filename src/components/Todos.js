import React, { useRef } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import {
	handleAddTodo,
	handleDeleteTodo,
	handleToggle,
} from '../actions/todos';

export default function Todos() {
	const input = useRef('');
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	const toggleItem = (id) => {
		dispatch(handleToggle(id));
	};

	const removeItem = (todo) => {
		dispatch(handleDeleteTodo(todo));
	};

	const addItem = (e) => {
		e.preventDefault();
		dispatch(
			handleAddTodo(input.current.value, () => (input.current.value = ''))
		);
	};

	return (
		<div>
			<h1>Todo List</h1>
			<input type='text' placeholder='Add Todo' ref={input} />
			<button onClick={addItem}>Add Todo</button>
			<List items={todos} remove={removeItem} toggle={toggleItem} />
		</div>
	);
}

// class Todos extends React.Component {
// 	addItem = (e) => {
// 		e.preventDefault();
// 		this.props.dispatch(
// 			handleAddTodo(this.input.value, () => (this.input.value = ''))
// 		);
// 	};

// 	removeItem = (todo) => {
// 		this.props.dispatch(handleDeleteTodo(todo));
// 	};

// 	toggleItem = (id) => {
// 		this.props.dispatch(handleToggle(id));
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<h1>Todo List</h1>
// 				<input
// 					type='text'
// 					placeholder='Add Todo'
// 					ref={(input) => (this.input = input)}
// 				/>
// 				<button onClick={this.addItem}>Add Todo</button>
// 				<List
// 					items={this.props.todos}
// 					remove={this.removeItem}
// 					toggle={this.toggleItem}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default connect((state) => ({
// 	todos: state.todos,
// }))(Todos);

// 52
