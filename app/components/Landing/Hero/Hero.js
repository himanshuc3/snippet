import React from 'react';
import styled from '@emotion/styled';
import { A, theme } from '../../../styles';
import logo from '../../../assets/logo.svg';

// CSS start ---
const Hero = styled.div`
	width: 60%;
	// background: yellow;
	margin: 0 auto;
	& h1 {
		text-align: center;
	}
	& > h3 {
		text-align: center;
		font-family: ${theme.fonts.para};
		font-weight: 500;
		// font-size: ${theme.fontSize.large};
		font-size: ${theme.fontSize.medium};
		color: ${theme.colors.blackShade};
	}

	& > h3 > span{
		font-weight: 900;
		border-bottom: 2px solid ${theme.colors.blackShade};
		border-style: dashed; 
	}
	@media (max-width: 1024px) {
		width: 70%;
	}
`;

const HeroSection1 = styled.section`
	// background: blue;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 5rem;
	font-family: ${theme.fonts.title};
	color: ${theme.colors.primary};

	& span {
		position: relative;
		display: inline-block;
	}
`;

const LogoImg = styled.img`
	src: ${props => props.src};
	left: -50px;
	position: absolute;
	top: 50%;
	height: 50px;
	transform: translateY(-40%);
`;

// CSS end ---

const _Hero = props => {
	return (
		<Hero>
			<HeroSection1>
				<span>
					<LogoImg src={logo} alt="laptop image with animating code" />
					snippet
				</span>
			</HeroSection1>
			<h3>
				Create 🤩 <span>minimal</span> code snippet snapshots with diverse programming 🌐{' '}
				<span>languages</span>, theming options and <span>offline</span> 👀 capabilities.
			</h3>
		</Hero>
	);
};

export default _Hero;
