import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './SecondaryNav.scss';

export default class SecondaryNav extends React.Component {
	render() {
		let nav = null;
		if ( this.props.routes ) {
			nav = (
				<ul className="secondary-nav__menu">
					{this.props.routes.map( ( route, index ) => {
						return (
							<li className="secondary-nav__menu__item" key={ index }>
								<Link className="secondary-nav__link" activeClassName="secondary-nav__link--active" to={ route.path }>{ route.name }</Link>
							</li>
						);
					})}
				</ul>
			);
		}
		return (
			<nav className="secondary-nav">
				<div className="container">{ nav }</div>
			</nav>
		);
	}
}