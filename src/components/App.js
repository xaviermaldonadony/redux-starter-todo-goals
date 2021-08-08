import React, { useEffect } from 'react';
// import {connect} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import ConnectedGoals from './Goals';
import ConnectedTodos from './Todos';
import { handleInitialData } from '../actions/shared';

export default function App() {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.loading);

	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	if (loading) {
		return <h3>Loading..........</h3>;
	}

	return (
		<div>
			<ConnectedTodos />
			<ConnectedGoals />
		</div>
	);
}

// refactored from classes to using hooks
// class App extends React.Component {
// 	componentDidMount() {
// 		const { dispatch } = this.props;
// 		dispatch(handleInitialData());
// 	}

// 	render() {
// 	}
// }

// export default connect((state) => ({
// 	loading: state.loading,
// }))(App);
