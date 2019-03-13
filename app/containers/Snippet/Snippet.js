import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.svg';
import twitterLogo from '../../assets/twitter.svg';
import facebookLogo from '../../assets/facebook.svg';
import githubLogo from '../../assets/github.svg';
import Menu from '../../components/Menu/Menu';
import Options from '../../components/Options/Options';

const Header = styled.header`
	width: 100%;
	// height: 40px;
	background: red;
`;

const LogoImg = styled.img`
	src: ${props => props.src};
`;

const ShareContainer = styled.div`
	border-radius: 5px;
	background-color: ${props => props.backgroundColor};
`;

const ShareIcon = styled.img`
	src: ${props => props.src};
`;

class Snippet extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let share = [
			{
				text: 'Share on facebook',
				logo: facebookLogo,
				backgroundColor: '#39539D'
			},
			{
				text: 'Share on twitter',
				logo: twitterLogo,
				backgroundColor: '#009CF9'
			}
		];

		return (
			<React.Fragment>
				<Header>
					<div>
						<LogoImg src={Logo} />
						<h1>snippet</h1>
					</div>
					<div>
						{share.map((item, index) => {
							return (
								<ShareContainer backgroundColor={item.backgroundColor}>
									<ShareIcon src={item.logo} />
									<span>{item.text}</span>
								</ShareContainer>
							);
						})}
						<LogoImg src={githubLogo} />
					</div>
				</Header>
				<Menu />
				<Options />
			</React.Fragment>
		);
	}
}

Snippet.propTypes = {};

// const mapStateToProps = (state) => {
// 	return {

// 	}
// }

export default Snippet;
