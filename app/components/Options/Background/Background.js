import React, { Component } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Dropdown from '../../Dropdown/Dropdown';
import { SketchPicker } from 'react-color';
import { setEditorConfig } from '../../../store/actions/editor';

const Wrapper = styled.div`
	// background: green;
	// height: 70px;
	color: white;
`;

class Background extends Component {
	handleChangeColor = color => {
		this.props.changeColor('background', color.hex);
	};

	render() {
		return (
			<Wrapper>
				<SketchPicker color={this.props.color} onChange={this.handleChangeColor} />
			</Wrapper>
		);
	}
}

let mapStateToProps = state => {
	return {
		color: state.editor.background
	};
};

let mapDispatchToProps = dispatch => {
	return {
		changeColor: (key, value) => {
			dispatch(setEditorConfig(key, value));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Background);
