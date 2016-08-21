import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './Header.scss';
import PrimaryNav from '../PrimaryNav/PrimaryNav.jsx';
import SecondaryNav from '../SecondaryNav/SecondaryNav.jsx';

export default class Header extends React.Component {
	render() {
		let primary_routes = this.props.routes[ 0 ].childRoutes;
		let secondary_routes = this.props.routes[ 1 ].childRoutes;
		return (
			<header className="header">
				<Link to="/">
					<img className="header__logo" src="images/logo.png" alt="Urban Yoga" />
				</Link>
				<PrimaryNav routes={ primary_routes } location={ this.props.location } />
				<SecondaryNav routes={ secondary_routes } location={ this.props.location } />
			</header>
		);
	}
}