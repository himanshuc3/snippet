import React from 'react';
import Aux from './containers/Aux/Aux';
import { Route } from 'react-router-dom';
import { Global } from '@emotion/core';
import Landing from './containers/Landing/Landing';
import { reset } from './styles/index';
import Snippet from './containers/Snippet/Snippet';

const App = () => {
	return (
		<Aux>
			<Global styles={reset} />
			<Route exact path="/" component={Landing} />
			<Route exact path="/main" component={Snippet} />
		</Aux>
	);
};

export default App;
