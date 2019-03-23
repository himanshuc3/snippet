import React, { Component } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { theme } from '../../styles';
import { changeOption } from '../../store/actions/option';

// CSS starts---
const Wrapper = styled.div`
	width: 75px;
	background: rgb(14, 19, 24);
	display: flex;
`;

const UnorderedList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;

	& li {
		position: relative;
	}

	& > li > button:hover {
		cursor: pointer;
		color: yellow;
		transition: ${theme.transition};
	}
`;

const MenuIcon = styled.img`
	src: ${props => props.src};
	width: 24px;
`;

const BUTTON = styled.button`
	display: flex;
	flex-direction: column;
	background: none;
	border: none;
	width: 100%;
	// background: blue;
	align-items: center;
	padding: 15px 0;
	color: rgba(255, 255, 255, 0.4);

	& > span {
		font-size: 10px;
		font-family: ${theme.fonts.para};
		font-weight: 600;

		padding-top: 5px;
	}
`;

const ActiveStyleLi = css`
	background: rgb(41, 48, 57);
	color: 'white';
`;

// CSS ends---

class SideMenu extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = option => {
		if (option != this.props.activeOption) this.props.newOption(option);
	};

	render() {
		let { activeOption } = this.props;

		let menuItems = Object.keys(this.props.options);

		let menuItemsToBeRendered = menuItems.map((key, index) => {
			if (activeOption === key) {
				return (
					<li key={key} css={ActiveStyleLi}>
						<BUTTON onClick={() => this.handleClick(key)}>
							<MenuIcon src={this.props.options[key].src} />
							<span>{key}</span>
						</BUTTON>
					</li>
				);
			}

			return (
				<li key={key}>
					<BUTTON
						css={css`
							transition: theme.transition;
						`}
						onClick={() => this.handleClick(key)}
					>
						<MenuIcon src={this.props.options[key].src} />
						<span>{key}</span>
					</BUTTON>
				</li>
			);
		});

		return (
			<Wrapper>
				<UnorderedList>{menuItemsToBeRendered}</UnorderedList>
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
)(SideMenu);
