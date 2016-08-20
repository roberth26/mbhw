import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './PrimaryNav.scss';

export default class PrimaryNav extends React.Component {
	render() {
		let nav = null;
		if ( this.props.routes ) {
			nav = (
				<ul className="primary-nav__menu">
					{this.props.routes.map( ( route, index ) => {
						return (
							<li className="primary-nav__menu__item" key={ index }>
								<Link className="primary-nav__link" activeClassName="primary-nav__link--active" to={ route.path }>{ route.name }</Link>
							</li>
						);
					})}
				</ul>
			);
		}
		return (
			<nav className="primary-nav">
				{ nav }
			</nav>
		);
	}
}