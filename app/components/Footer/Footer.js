import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles';

const Footer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	color: white;
	background: black;
	// position: absolute;
	padding: 10px 0;
	// bottom: 0;
	// left: 0;
	font-family: ${theme.fonts.para};
	font-weight: 600;
	font-size: ${theme.fontSize.xxsmall};
	& * {
		transition: ${theme.transition};
	}
`;

const Name = styled.span`
	font-weight: 800;
	border-bottom: 2px solid white;
	border-bottom-style: dashed;
	padding: 2px;

	&:hover {
		cursor: pointer;
		background: white;
		color: black;

		border-radius: 2px;
	}
`;

const Hand = styled.span`
	display: inline-block;
	transform: rotate(-40deg);
	animation: handwave 2s infinite;

	@keyframes handwave {
		30% {
			transform: rotate(0deg);
		}
		60% {
			transform: rotate(-40deg);
		}
	}
`;

const Preview = props => {
	return (
		<Footer>
			<p>
				Made with 💜 & <Hand>🖐</Hand> by <Name>Himanshu Chhabra</Name>. Enjoy! 🎊
			</p>
		</Footer>
	);
};

export default Preview;
