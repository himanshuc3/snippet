import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { theme } from '../../styles';

const Wrapper = styled.div`
	display: flex;
	// border: 1px solid orange;
	background: rgb(41, 48, 57);
	width: 20%;
`;

class Options extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let ActiveOptionComponent = this.props.options[this.props.activeOption].cmp;
		console.log(this.props.activeOption);
		return (
			<Wrapper>
				<ActiveOptionComponent />
			</Wrapper>
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
