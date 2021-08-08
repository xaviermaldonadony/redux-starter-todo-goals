import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';

// Middleware
// currying
// if an action is dispatched before that action hits the reducer
// we are going to run a middleware
const checker = (store) => (next) => (action) => {
	if (
		action.type === ADD_TODO &&
		action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
	) {
		return alert("Nope, that's a bad ide.");
	}
	if (
		action.type === ADD_GOAL &&
		action.goal.name.toLowerCase().indexOf('bitcoin') !== -1
	) {
		return alert("Nope, that's a bad ide.");
	}
	// when checker calls next, it triggers logger
	// since we only have to middleware
	return next(action);
};

export default checker;
