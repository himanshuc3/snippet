import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';

import { theme } from '../../styles';
import Logo from '../../assets/logo.svg';
import twitterLogo from '../../assets/twitter.svg';
import facebookLogo from '../../assets/facebook.svg';
import githubLogo from '../../assets/github.svg';
import Menu from '../../components/Menu/Menu';
import Options from '../../components/Options/Options';
import EditorDisplay from '../../components/EditorDisplay/EditorDisplay';

const Header = styled.header`
	border-bottom: 1px solid black;

	// background: red;
`;

const HeaderInnerWrap = styled.div`
	width: 95%;
	margin: 0 auto;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;

	& > span {
		color: ${theme.colors.primary};
		font-family: ${theme.fonts.title};
		font-size: ${theme.fontSize.large};
		font-weight: 900;
		padding-left: 10px;
	}
`;

const HeaderRight = styled.div`
	display: flex;
	align-items: center;
`;

const LogoImg = styled.img`
	src: ${props => props.src};
	height: 30px;
`;

const ShareContainer = styled.button`
	display: flex;
	align-items: center;
	color: white;
	font-family: ${theme.fonts.para};
	border-radius: 3px;
	font-size: 0.9rem;
	font-weight: 600;
	background-color: ${props => props.backgroundColor};
	margin-right: 10px;
	padding: 3px 15px;
`;

const ShareIcon = styled.img`
	src: ${props => props.src};
	padding-right: 10px;
	height: 0.8rem;
`;

class Snippet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			code: 'Hello world'
		};
	}

	render() {
		let share = [
			{
				text: 'Share on Facebook',
				logo: facebookLogo,
				backgroundColor: '#39539D'
			},
			{
				text: 'Share on Twitter',
				logo: twitterLogo,
				backgroundColor: '#009CF9'
			}
		];

		return (
			<React.Fragment>
				<Header>
					<HeaderInnerWrap>
						<HeaderLeft>
							<LogoImg src={Logo} />
							<span>snippet</span>
						</HeaderLeft>
						<HeaderRight>
							{share.map((item, index) => {
								return (
									<ShareContainer backgroundColor={item.backgroundColor}>
										<ShareIcon src={item.logo} />
										<span>{item.text}</span>
									</ShareContainer>
								);
							})}
							<LogoImg src={githubLogo} />
						</HeaderRight>
					</HeaderInnerWrap>
				</Header>
				<Menu />
				<Options />
				<EditorDisplay />
			</React.Fragment>
		);
	}
}

Snippet.propTypes = {};

export default Snippet;
