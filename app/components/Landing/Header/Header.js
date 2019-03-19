import React from 'react';
import styled from '@emotion/styled';
import { A, theme } from '../../../styles';
import forkMeGithubSrc from '../../../assets/forkmegithub.svg';

// CSS start ---
const Header = styled.header`
	// background: red;
	display: flex;
	width: 90%;
	margin: 0 auto;
	justify-content: flex-start;
	margin-top: 20px;
	height: ${theme.height.large};
`;

const UnorderedList = styled.ul`
	display: flex;
	list-style-type: none;
	// background: green;

	& > li > a {
		font-family: ${theme.fonts.para};
		font-weight: 900;
		font-size: ${theme.fontSize.small};
		margin-right: 5rem;

		@media (max-width: 1024px) {
			font-size: ${theme.fontSize.xsmall};
		}
	}
`;

const GithubImage = styled.img`
	src: ${props => props.src};
	position: absolute;
	top: 0;
	right: 0;
	height: ${theme.height.large};
`;

// CSS end ---

const _Header = props => {
	const menuItems = [
		{
			name: 'Like my work? hire me.',
			href: '/#',
			styles: {
				borderBottom: '5px solid #9800D0'
			}
		},
		{
			name: 'resources.',
			href: '/#',
			styles: {}
		},
		{
			name: 'support.',
			href: '/#',
			styles: {}
		},
		{
			name: 'v1.0.0',
			href: '/#',
			styles: {
				borderBottom: '5px solid #000'
			}
		}
	];

	return (
		<Header>
			<UnorderedList>
				{menuItems.map((item, index) => {
					return (
						<li key={name}>
							<A href={item.href} style={item.styles}>
								{item.name}
							</A>
						</li>
					);
				})}
			</UnorderedList>
			<GithubImage src={forkMeGithubSrc} alt="fork this project" />
		</Header>
	);
};

export default _Header;
