import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import domToImage from 'dom-to-image';

import { theme } from '../../styles';
import nightLogo from '../../assets/night.svg';
import downloadLogo from '../../assets/download.svg';
import Logo from '../../assets/logo.svg';
import twitterLogo from '../../assets/twitter.svg';
import facebookLogo from '../../assets/facebook.svg';
import githubLogo from '../../assets/github.svg';
import SideMenu from '../../components/SideMenu/SideMenu';
import Footer from '../../components/Footer/Footer.js';
import Options from '../../components/Options/Options';
import EditorDisplay from '../../components/EditorDisplay/EditorDisplay';

const Wrapper = styled.div`
	overflow: hidden;
	display: flex;
	height: 100vh;
	border: 1px solid red;
	// background: blue;
	flex-direction: column;
`;

const Header = styled.header`
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	// background: red;
`;

const HeaderInnerWrap = styled.div`
	display: flex;
	width: 100%;
	margin: 0 auto;
	padding: 10px 0;
	justify-content: space-between;
	align-items: center;
	// background: green;
`;

const HeaderLeft = styled.div`
	width: 75px;
	// display: flex;
	// align-items: center;
	// background: red;
	text-align: center;
`;

const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	// background: yellow;
	padding: 0 20px;
	flex-grow: 1;
`;

const LogoImg = styled.img`
	src: ${props => props.src};
	height: 30px;
`;

const SharingIsCaring = styled.div`
	display: flex;
`;

const ShareContainer = styled.button`
	display: flex;
	align-items: center;
	font-family: ${theme.fonts.para};
	border-radius: 3px;
	border: ${props => props.border};
	font-size: 0.9rem;
	font-weight: 600;
	margin-right: 10px;
	padding: 3px 15px;

	&:hover {
		cursor: pointer;
	}
`;

const ShareIcon = styled.img`
	src: ${props => props.src};
	padding-right: 10px;
	height: 0.8rem;
`;

const Main = styled.div`
	overflow: scroll;
	display: flex;
	flex-direction: row;
	justify-content: start;
	flex-grow: 1;
`;

const MainPanel = styled.div`
	display: flex;
	// background: purple;
	flex-direction: column;
	flex-grow: 1;
	position: relative;
	overflow-y: scroll;
`;

const QuickAccessButtons = styled.div`
	display: flex;
	// background: blue;
	padding: 20px;
	justify-content: flex-end;
`;

const EditorAndFooter = styled.div`
	// background: blue;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-between;
`;

class Snippet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			code: 'Hello world'
		};
	}

	handleCanvasDownload = () => {
		domToImage.toBlob(document.getElementsByClassName('editor-display-wrapper')[1]).then(blob => {
			console.log(blob);
			saveAs(blob, 'artboard.png');
		});
	};

	render() {
		let share = [
			{
				text: 'Share on Facebook',
				logo: facebookLogo,
				border: `1px solid ${theme.colors.facebook}`
			},
			{
				text: 'Share on Twitter',
				logo: twitterLogo,
				border: `1px solid ${theme.colors.twitter}`
			}
		];

		return (
			<Wrapper>
				<Header>
					<HeaderInnerWrap>
						<HeaderLeft>
							<LogoImg src={Logo} />
						</HeaderLeft>
						<HeaderRight>
							<div>
								<ShareContainer border={`1px solid #1F1F1F`}>
									<ShareIcon src={nightLogo} />
									<span>Night mode</span>
								</ShareContainer>
							</div>
							<SharingIsCaring>
								{share.map((item, index) => {
									return (
										<ShareContainer border={item.border}>
											<ShareIcon src={item.logo} />
											<span>{item.text}</span>
										</ShareContainer>
									);
								})}
								<LogoImg src={githubLogo} />
							</SharingIsCaring>
						</HeaderRight>
					</HeaderInnerWrap>
				</Header>
				<Main>
					<SideMenu />
					<Options />
					<MainPanel>
						<QuickAccessButtons>
							<ShareContainer border={`1px solid #1F1F1F`} onClick={this.handleCanvasDownload}>
								<ShareIcon src={downloadLogo} />
								<span>Download</span>
							</ShareContainer>
						</QuickAccessButtons>
						<EditorAndFooter>
							<EditorDisplay style={{}} />
							<Footer />
						</EditorAndFooter>
					</MainPanel>
				</Main>
				<EditorDisplay style={{ position: 'absolute', top: '-100vh', minWidth: '1920px' }} />
			</Wrapper>
		);
	}
}

Snippet.propTypes = {};

export default Snippet;
