import React from 'react';
import styled from '@emotion/styled';
import CustomDropdown from '../../CustomDropdown/CustomDropdown';

import 'brace/theme/github';
import 'brace/theme/chrome';
import 'brace/theme/dreamweaver';
import 'brace/theme/terminal';

const Wrapper = styled.div`
	// background: green;
	// height: 70px;
	color: white;
`;

const Editor = props => {
	return (
		<Wrapper>
			<Dropdown
				attribute="theme"
				label="Theme"
				options={[
					{
						value: 'default',
						text: 'default'
					},
					{
						value: 'terminal',
						text: 'terminal'
					},
					{
						value: 'chrome',
						text: 'chrome'
					},
					{
						value: 'dreamweaver',
						text: 'dreamweaver'
					}
				]}
			/>
		</Wrapper>
	);
};

export default Editor;
