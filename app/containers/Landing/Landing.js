import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Redirect } from 'react-router';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { A, theme } from '../../styles/index';
import github from '../../assets/github.svg';
import logo from '../../assets/logo.svg';
import laptop from '../../assets/laptop.svg';
import Modal from '../../components/Modal/Modal';
import Preview from '../../components/Preview/Preview';
import github2 from '../../assets/forkmegithub.svg';

const Container = styled.div`
	// background: black;
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
`;

const topLinks = css`
	font-size: 8px;
`;

const Content = styled.div`
	flex: 1 0 auto;
`;

const Header = styled.header`
	// background: red;
	display: flex;
	justify-content: space-around;
	padding: 20px 0;

	// &:after {
	// 	content: '';
	// 	width: 80%;
	// 	height: 400px;
	// 	background: ${theme.colors.secondary};
	// 	border-bottom-right-radius: 20px;
	// 	transform: rotate(-10deg);
	// 	opacity: 0.5;
	// 	position: absolute;
	// 	z-index: 100;
	// 	top: -40%;
	// 	left: -10%;
	// }
`;

const ShowCase = styled.div`
	display: flex;
	width: 60%;
	margin: 0 auto;
	justify-content: space-around;
	background: red;
	align-items: center;
`;

/* eslint-disable-next-line */
const GithubImage = styled.img`
	src: ${props => props.src};
	position: absolute;
	top: 0;
	right: 0;
	height: 100px;
`;

const LaptopImg = styled.img`
	width: 600px;
	src: url(${props => props.src});
`;

const Hero = styled.div`
	width: 60%;
	background: yellow;
	margin: 0 auto;

	& h1 {
		text-align: center;
	}
`;

const UnorderedList = styled.ul`
	display: flex;
	font-size: 30px;
	list-style-type: none;
	justify-content: space-between;
	width: 50%;
	// background: green;
`;

const Footer = styled.footer`
	flex-shrink: 0;
	text-align: center;
`;

const GetStartedSpan = styled.span`
	transform: rotate(-20deg);
	padding: 20px;
	background: green;
`;

const GetStartedButton = styled.button`
	transform: rotate(20deg);
`;

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

	handleKeyEvent = e => {
		console.log(e);
		let { charCode } = e;
		if (charCode === 83 || charCode == 115) {
			this.props.history.push('/main');
		}
	};

	render() {
		const menuItems = [
			{
				name: 'feature1',
				href: '/#'
			},
			{
				name: 'feature2',
				href: '/#'
			},
			{
				name: 'feature3',
				href: '/#'
			},
			{
				name: 'feature4',
				href: '/#'
			}
		];
		return (
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
					<Header>
						<UnorderedList>
							{menuItems.map((item, index) => {
								return (
									<li key={name}>
										<A href={item.href} css={topLinks}>
											{item.name}
										</A>
									</li>
								);
							})}
						</UnorderedList>
						<GithubImage src={github2} alt="fork this project" />
					</Header>
					<Hero>
						<h1>
							<img src={logo} alt="laptop image with animating code" />
							snippet
						</h1>
						<h3>
							Create minimal code snippet snapshots with variety of customizations available .
						</h3>
					</Hero>
					<ShowCase>
						<LaptopImg src={laptop} />
						<GetStartedSpan>
							<GetStartedButton onClick={this.toggleModal}>Get Started</GetStartedButton>
						</GetStartedSpan>
					</ShowCase>
				</Content>
				<Footer>
					<p>Made by @himanshuc3</p>
				</Footer>
			</Container>
		);
	}
}

export default Landing;
