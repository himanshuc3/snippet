import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global } from '@emotion/core';
import Landing from './containers/Landing/Landing';
import { reset } from './styles/index';
import Snippet from './containers/Snippet/Snippet';
import NotFound from './containers/NotFound/NotFound';

const App = () => {
	return (
		<React.Fragment>
			<Global styles={reset} />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/main" component={Snippet} />
				<Route component={NotFound} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
