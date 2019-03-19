import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { theme } from '../../styles';

const Wrapper = styled.div`
	display: flex;
	padding: 10px 5%;
	background: ${theme.colors.brownish};

	& > h1{
		font-size: 5rem;
		font-family: ${theme.fonts.title};
		// color: white;
		// -webkit-text-fill-color: ${theme.colors.brownish};
		// -webkit-text-stroke-width: 2px;
		// -webkit-text-stroke-color: white;
		color: ${theme.colors.brownish};
		text-shadow:
   -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
     1px 1px 0 #fff;
	}
`;

class Options extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let ActiveOptionComponent = this.props.options[this.props.activeOption];
		console.log(this.props.activeOption);
		return (
			<Wrapper>
				<h1>OPTIONS</h1>
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
