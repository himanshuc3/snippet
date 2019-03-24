import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { setEditorConfig } from '../../store/actions/editor';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	// background: red;
	height: 100%;

	& label {
		display: inline-block;
		margin-bottom: 10px;
	}
`;

class CustomDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 10
		};
	}

	handleChange = (e, value) => {
		console.log(e, this.props.attribute);
		this.props.changeConfig(this.props.attribute, value);
	};

	render() {
		return (
			<Wrapper>
				<label>{this.props.label}</label>
				<Select
					value={this.state.age}
					onChange={this.handleChange}
					input={<OutlinedInput labelWidth={20} name="age" id="outlined-age-simple" />}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
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
)(CustomDropdown);
