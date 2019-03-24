import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import { theme } from '../../styles';
import { setEditorConfig } from '../../store/actions/editor';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: rgba(0, 0, 0, 0.2);
	width: 80%;
	padding: 20px;
	border-radius: 5px;

	& label {
		display: inline-block;
		margin-bottom: 10px;
	}
`;

const styless = {
	root: {
		background: 'red',
		height: '200px'
	},
	slider: {
		background: 'red'
	},
	trackBefore: {
		background: 'red'
	}
};

const Accessibility = styled.div`
	font-family: ${theme.fonts.para};
	font-size: ${theme.fontSize.xsmall};
	font-weight: 900;
	margin-bottom: 10px;
	& > img {
		margin-right: 10px;
	}
`;

class CustomSlider extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = (e, value) => {
		this.props.changeConfig(this.props.attribute, value);
	};

	render() {
		return (
			<Wrapper>
				<Accessibility>
					<img src={this.props.src} />
					<label>{this.props.label}</label>
				</Accessibility>

				<Slider
					value={this.props.attributeValueFromStore}
					min={12}
					max={32}
					step={2}
					onChange={this.handleChange}
				/>
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

// TO-DO: withstyles not working

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styless)(CustomSlider));
