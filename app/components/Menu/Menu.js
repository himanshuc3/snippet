import React, { Component } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import domToImage from 'dom-to-image';
import { theme } from '../../styles';
import heartLogo from '../../assets/heart.svg';
import downloadLogo from '../../assets/download.svg';
import { changeOption } from '../../store/actions/option';

// CSS starts---
const Wrapper = styled.div`
	display: flex;
	padding: 10px 2.5%;
	justify-content: space-between;
	border-bottom: 1px solid black;
`;

const UnorderedList = styled.ul`
	& > li {
		display: inline-block;
		margin-right: 80px;
	}

	& > li > button {
		font-family: ${theme.fonts.para};
		font-size: ${theme.fontSize.xsmall};
		font-weight: 900;
		padding: 2px 10px;
		border-radius: 5px;
	}

	& > li > button:hover {
		cursor: pointer;
		background: ${theme.colors.blackShade};
		color: white;
		transition: ${theme.transition};
	}
`;

const Utilities = styled.div`
	background: red;
	// display: flex;
	// align-items: center;
`;

// CSS ends---

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = option => {
		if (option != this.props.activeOption) this.props.newOption(option);
	};

	handleCanvasDownload = () => {
		domToImage.toBlob(document.getElementsByClassName('editor-display-wrapper')[0]).then(blob => {
			console.log(blob);
			saveAs(blob, 'artboard.png');
		});
	};

	render() {
		let activeStyle = {
			background: theme.colors.blackShade,
			color: 'white'
		};
		let menuItems = Object.keys(this.props.options).map((item, index) => {
			return (
				<li key={item}>
					<button
						style={
							this.props.activeOption === item ? activeStyle : { transition: theme.transition }
						}
						onClick={() => this.handleClick(item)}
					>
						{item}
					</button>
				</li>
			);
		});

		return (
			<Wrapper>
				<UnorderedList>{menuItems}</UnorderedList>
				<Utilities>
					<button>
						<img src={heartLogo} />
					</button>
					<button onClick={this.handleCanvasDownload}>
						<img src={downloadLogo} />
					</button>
				</Utilities>
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

const mapDispatchToProps = dispatch => {
	return {
		newOption: newOption => dispatch(changeOption(newOption))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);
