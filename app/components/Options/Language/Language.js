import React from 'react';
import styled from '@emotion/styled';
import Dropdown from '../../Dropdown/Dropdown';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/python';

const Wrapper = styled.div`
	// background: green;
	// height: 70px;
	color: white;
`;

const Language = props => {
	return (
		<Wrapper>
			<Dropdown
				attribute="language"
				label="Language"
				options={[
					{
						value: 'javascript',
						text: 'javascript'
					},
					{
						value: 'css',
						text: 'css'
					},
					{
						value: 'python',
						text: 'python'
					}
				]}
			/>
		</Wrapper>
	);
};

export default Language;
