const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log('The action: ', action);
	// next if logger is the last middleware in the chain is as if calling dispatch(action)
	const result = next(action);
	console.log('The new state: ', store.getState());
	console.groupEnd();
	return result;
};

export default logger;
