import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './components/App/App.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ App }>
			<IndexRedirect to="dashboard" />
			<Route path="dashboard" component={ Dashboard } />
		</Route>
	</Router>,
	document.getElementById( 'app-container' )
);