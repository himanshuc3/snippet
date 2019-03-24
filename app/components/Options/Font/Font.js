import React from 'react';
import styled from '@emotion/styled';
import CustomSlider from '../../CustomSlider/CustomSlider';
import fontSizeIcon from '../../../assets/font_size.svg';

const Wrapper = styled.div`
	// background: yellow;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	// height: 70px;
	padding: 20px 0;
	color: white;
`;

const Font = props => {
	return (
		<Wrapper>
			<CustomSlider attribute="fontSize" label="Size" src={fontSizeIcon} />
		</Wrapper>
	);
};

export default Font;
