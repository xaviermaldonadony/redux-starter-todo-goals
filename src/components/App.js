import React from 'react';
import { connect } from 'react-redux';
import ConnectedGoals from './Goals';
import ConnectedTodos from './Todos';
import { handleInitialData } from '../actions/shared';

class App extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}

	render() {
		const { loading } = this.props;

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
}

export default connect((state) => ({
	loading: state.loading,
}))(App);
