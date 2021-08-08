import React, { useRef } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';

export default function Goals() {
	const input = useRef('');
	const dispatch = useDispatch();
	const goals = useSelector((state) => state.goals);

	const addItem = (e) => {
		e.preventDefault();

		dispatch(
			handleAddGoal(input.current.value, () => (input.current.value = ''))
		);
	};

	const removeItem = (goal) => {
		dispatch(handleDeleteGoal(goal));
	};

	return (
		<div>
			<h1>Goals</h1>
			<input type='text' placeholder='Add Goal' ref={input} />
			<button onClick={addItem}>Add Goal</button>
			<List items={goals} remove={removeItem} />
		</div>
	);
}

// rewriten above with hooks
// class Goals extends React.Component {
// 	addItem = (e) => {
// 		e.preventDefault();

// 		this.props.dispatch(
// 			handleAddGoal(this.input.value, () => (this.input.value = ''))
// 		);
// 	};

// 	removeItem = (goal) => {
// 		this.props.dispatch(handleDeleteGoal(goal));
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<h1>Goals</h1>
// 				<input
// 					type='text'
// 					placeholder='Add Goal'
// 					ref={(input) => (this.input = input)}
// 				/>
// 				<button onClick={this.addItem}>Add Goal</button>
// 				<List items={this.props.goals} remove={this.removeItem} />
// 			</div>
// 		);
// 	}
// }

// export default connect((state) => ({
// 	goals: state.goals,
// }))(Goals);
