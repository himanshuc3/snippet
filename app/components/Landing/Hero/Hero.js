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
		font-weight: 700;
		font-size: ${theme.fontSize.large};
		color: ${theme.colors.secondary};
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
	left: -100px;
	position: absolute;
	top: 50%;
	height: 50px;
	transform: translateY(-50%);
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
				Create minimal code snippet snapshots <br /> with variety of customizations & languages
				available .
			</h3>
		</Hero>
	);
};

export default _Hero;
