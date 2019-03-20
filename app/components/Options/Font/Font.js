import React from 'react';
import styled from '@emotion/styled';
import Dropdown from '../../Dropdown/Dropdown';

const Wrapper = styled.div`
	// background: green;
	// height: 70px;
	color: white;
`;

const Font = props => {
	return (
		<Wrapper>
			<Dropdown
				attribute="fontSize"
				label="Size"
				options={[
					{
						value: '12px',
						text: '12px'
					},
					{
						value: '14px',
						text: '14px'
					},
					{
						value: '16px',
						text: '16px'
					}
				]}
			/>
		</Wrapper>
	);
};

export default Font;
