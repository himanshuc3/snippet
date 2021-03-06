import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Redirect } from 'react-router';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { A, theme, media } from '../../styles/index';
import Header from '../../components/Landing/Header/Header';
import Hero from '../../components/Landing/Hero/Hero';
import github from '../../assets/github.svg';
import laptop from '../../assets/laptop.svg';
import Modal from '../../components/Modal/Modal';
import arrowRight from '../../assets/arrow_right.svg';
import Preview from '../../components/Preview/Preview';
import Footer from '../../components/Footer/Footer';
import github2 from '../../assets/forkmegithub.svg';

// CSS Starting ----

const OuterMostContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;
const Container = styled.div`
	// background: black;
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	overflow-y: scroll;
	flex-direction: column;
`;

const topLinks = css`
	font-size: 8px;
`;

const Content = styled.div`
	flex: 1 0 auto;
`;

// TO-DO: Media query templates not working
const ShowCase = styled.div`
	display: flex;
	width: 90%;
	margin: 0 auto;
	justify-content: space-around;
	margin-top: 40px;
	// background: red;
	align-items: center;

	@media (max-width: 1210px) {
		width: 100%;
	}
	@media (max-width: 1024px) {
		width: 90%;
		flex-direction: column;
	}
`;

const LaptopImg = styled.img`
	width: 800px;
	src: url(${props => props.src});

	@media (max-width: 1210px) {
		width: 50%;
	}
	@media (max-width: 1024px) {
		width: 750px;
	}
`;

// const Footer = styled.footer`
// 	flex-shrink: 0;
// 	text-align: center;
// `;

const GetStartedButton = styled.button`
	background: none;
	border: 0;
	border-radius: 5px;
	background: ${theme.colors.primary};
	font-family: 'Overpass', sans-serif;
	font-weight: 900;
	font-size: ${theme.fontSize.medium};
	color: white;
	transition: ${theme.transition};

	&:hover {
		background: ${theme.colors.primary};
		color: white;
		cursor: pointer;
		background: ${theme.colors.blackShade};

		& > span > img {
			// padding-right: 10px;
		}
	}

	@media (max-width: 1024px) {
		margin: 40px 0;
	}
`;

const GetStartedSpan = styled.span`
	display: inline-block;
	padding: 10px 30px;
	// background: green;
	transition: ${theme.transition};

	& > img {
		transition: ${theme.transition};
		padding-left: 10px;
	}
`;

const ContinueToAppButton = styled.div`
	display: flex;
	flex-direction: column;

	& > span {
		margin-top: 10px;
		font-family: ${theme.fonts.para};
		font-weight: 200;
		font-size: ${theme.fontSize.xsmall};
		color: ${theme.colors.primary};
	}
`;

const FixedBottomBG = styled.div`
	z-index: -1;
	position: absolute;
	width: 150vw;
	height: 50vw;
	bottom: -30vw;
	background: #0ed8b2;
	opacity: 0.2;
	transform: rotate(-5deg);
`;
// CSS end ----

class Landing extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	componentDidMount() {
		document.addEventListener('keypress', this.handleKeyEvent);
	}

	toggleModal = () => {
		this.setState(prevState => {
			return {
				show: !prevState.show
			};
		});
	};

	goToEditor = () => {
		this.props.history.push('/main');
	};

	handleKeyEvent = e => {
		console.log(e);
		let { charCode } = e;
		if (charCode === 83 || charCode == 115) {
			this.props.history.push('/main');
		}
	};

	render() {
		return (
			<OuterMostContainer>
				<Container>
					<Helmet>
						{/* <meta charSet="utf-8" /> */}
						{/* <title>Snippet | Minimal Screenshots for code.</title> */}
						<meta
							name="description"
							content="Take minimal screenshots of code with different flavours of font, background and themes. Instagram code pics."
						/>
						{/* Full screen view of website on mobile. */}
						<meta name="apple-mobile-web-app-capable" content="yes" />
						<meta name="apple-mobile-web-app-title" content="Snippet" />
						{/* Facebok opengraph tags */}
						<meta property="og:url" content="www.snippet.com" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Minimal screenshots of code." />
						<meta property="og:image" content="imagelink" />
						{/* 1200*630 */}
						<meta property="og:image:type" content="image/jpeg" />
						<meta property="og:image:width" content="500" />
						<meta property="og:image:height" content="400" />

						{/* Twitter cards */}
						<meta name="twitter:card" content="summary_large_image" />
						<meta name="twitter:site" content="@Snippet" />
						<meta name="twitter:creator" content="@HimanshuChhabra" />
						{/* 560*300 */}
						<meta name="twitter:image" content="imageLink" />
						{/* Schema breadcrumb on google. TO-DO. failed to compile. */}
						{/* <script type="application/ld+json">
					{
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					"itemListElement": [{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "https://snippet.com/"
					},{
						"@type": "ListItem",
						"position": 2,
						"name": "Editor",
						"item": "https://snippet.com/main"
					}]
					}
					</script> */}
					</Helmet>
					<Modal show={this.state.show} modalClose={this.toggleModal}>
						<Preview />
					</Modal>
					<Content>
						<Header />
						<Hero />
						<ShowCase>
							<LaptopImg src={laptop} />
							<ContinueToAppButton>
								<GetStartedButton onClick={this.goToEditor}>
									<GetStartedSpan>
										Get Started <img src={arrowRight} />
									</GetStartedSpan>
								</GetStartedButton>
								<span>Or press space to continue 🚀</span>
							</ContinueToAppButton>
						</ShowCase>
					</Content>
					<Footer />
				</Container>
				<FixedBottomBG />
			</OuterMostContainer>
		);
	}
}

export default Landing;
