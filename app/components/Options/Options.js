import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let ActiveOptionComponent = this.props.options[this.props.activeOption];
		console.log(this.props.activeOption);
		return (
			<div>
				<h1>Options</h1>
				<ActiveOptionComponent />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		activeOption: state.option.activeOption,
		options: state.option.options
	};
};

export default connect(
	mapStateToProps,
	null
)(Options);
