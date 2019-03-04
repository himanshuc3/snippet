import React from 'react';
import { Global } from '@emotion/core';
import Landing from './containers/Landing/Landing';
import { reset } from './styles/index';

const App = () => {
	return (
		<div>
			<Global styles={reset} />
			<Landing />
		</div>
	);
};

export default App;
