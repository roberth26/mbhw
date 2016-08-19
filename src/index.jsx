import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './components/App/App.jsx';
import BusinessOverview from './components/BusinessOverview/BusinessOverview.jsx';
import Blank from './components/Blank/Blank.jsx';

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ App } name="main">
			<IndexRedirect to="dashboard" />
			<Route path="dashboard" name="Dashboard">
				<IndexRedirect to="business-overview" />
				<Route path="/" name="Dashboard" component={ Blank } />
				<Route path="business-overview" name="Business Overview" component={ BusinessOverview } />
				<Route path="schedule" name="Schedule" component={ Blank } />
				<Route path="reports" name="Reports" component={ Blank } />
			</Route>
			<Route path="sign-in" name="Sign In" component={ Blank } />
			<Route path="classes" name="Classes" component={ Blank } />
			<Route path="workshops" name="Workshops" component={ Blank } />
			<Route path="appointments" name="Appointments" component={ Blank } />
			<Route path="client-home" name="Client Home" component={ Blank } />
			<Route path="retail" name="Retail" component={ Blank } />
		</Route>
	</Router>,
	document.getElementById( 'app-container' )
);