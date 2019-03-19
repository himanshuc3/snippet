import styled from '@emotion/styled';
import theme from './theme';

const A = styled.a`
	text-decoration: none;
	text-decoration-skip-ink: auto;
	cursor: pointer;
	color: ${theme.colors.blackShade};
	transition: ${theme.transition};

	&:hover,
	&:focus {
		color: ${theme.colors.primary};
		outline: 0;
	}
`;

export default A;
