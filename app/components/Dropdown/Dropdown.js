import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { setEditorConfig } from '../../store/actions/editor';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// background: red;
	height: 100%;

	& label {
		display: inline-block;
		margin-bottom: 10px;
	}
`;

class Dropdown extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = e => {
		console.log(e, this.props.attribute);
		this.props.changeConfig(this.props.attribute, e.target.value);
	};

	render() {
		return (
			<Wrapper>
				<label>{this.props.label}</label>
				<select value={this.props.attributeValueFromStore} onChange={this.handleChange}>
					{this.props.options.map(item => {
						return <option value={item.value}>{item.text}</option>;
					})}
				</select>
			</Wrapper>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		attributeValueFromStore: state.editor[ownProps.attribute]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeConfig: (key, value) => dispatch(setEditorConfig(key, value))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dropdown);
