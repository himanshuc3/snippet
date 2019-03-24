import React from 'react';
import styled from '@emotion/styled';
import Dropdown from '../../CustomDropdown/CustomDropdown';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/python';
import CustomDropdown from '../../CustomDropdown/CustomDropdown';

const Wrapper = styled.div`
	// background: green;
	// height: 70px;
	color: white;
`;

const Language = props => {
	return (
		<Wrapper>
			<CustomDropdown
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
