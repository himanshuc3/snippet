import { css } from '@emotion/core';

const screen_sizes = {
	mac: 1440,
	transitionIntoKb: 1210,
	kilobyte: 1024,
	tablet: 768,
	phone: 300
};

// Iterate through the sizes and create a media template
const media = Object.keys(screen_sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${screen_sizes[label] / 16}em) {
			${css(...args)}
		}
	`;

	return acc;
}, {});

export default screen_sizes;
