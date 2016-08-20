import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './components/App/App.jsx';
import BusinessOverview from './components/BusinessOverview/BusinessOverview.jsx';
import Blank from './components/Blank/Blank.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ App }>
			<IndexRedirect to="/dashboard/business-overview" />
			<Route path="/dashboard" name="Dashboard" component={ Dashboard }>
				<Route path="/dashboard" name="Dashboard" component={ Blank } />
				<Route path="/dashboard/business-overview" name="Business Overview" component={ BusinessOverview } />
				<Route path="/dashboard/schedule" name="Schedule" component={ Blank } />
				<Route path="/dashboard/reports" name="Reports" component={ Blank } />
			</Route>
			<Route path="/sign-in" name="Sign In" component={ Blank } />
			<Route path="/classes" name="Classes" component={ Blank } />
			<Route path="/workshops" name="Workshops" component={ Blank } />
			<Route path="/appointments" name="Appointments" component={ Blank } />
			<Route path="/client-home" name="Client Home" component={ Blank } />
			<Route path="/retail" name="Retail" component={ Blank } />
		</Route>
	</Router>,
	document.getElementById( 'app-container' )
);