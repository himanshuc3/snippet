import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { A, theme } from '../../styles/index';
import github from '../../assets/github.svg';
import logo from '../../assets/logo.svg';
import laptop from '../../assets/laptop.svg';
import Modal from '../../components/Modal/Modal';
import Preview from '../../components/Preview/Preview';

const Container = styled.div`
	// background: black;
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
`;

const Content = styled.div`
	flex: 1 0 auto;
`;

const Header = styled.header`
	// background: red;
	display: flex;
	justify-content: space-around;
	padding: 20px 0;

	&:after {
		content: '';
		width: 80%;
		height: 400px;
		background: ${theme.colors.secondary};
		border-bottom-right-radius: 20px;
		transform: rotate(-10deg);
		opacity: 0.5;
		position: absolute;
		z-index: 100;
		top: -40%;
		left: -10%;
	}
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
const GithubImage = styled.img``;

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

	toggleModal = () => {
		this.setState(prevState => {
			return {
				show: !prevState.show
			};
		});
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
				<Modal show={this.state.show} modalClose={this.toggleModal}>
					<Preview />
				</Modal>
				<Content>
					<Header>
						<UnorderedList>
							{menuItems.map((item, index) => {
								return (
									<li key={name}>
										<Link to={item.href}>{item.name}</Link>
									</li>
								);
							})}
						</UnorderedList>
						<span>
							<img src={github} alt="fork this project" />
						</span>
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
