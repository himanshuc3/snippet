/* eslint-disable */

import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	};

	componentDidCatch = (err, info) => {
		this.setState({
			hasError: true,
			errorMessage: err
		});
	};

	render() {
		// Not shown in development mode
		if (this.state.hasError) {
			return <h1>Some error occured: ${this.state.errorMessage}</h1>;
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
