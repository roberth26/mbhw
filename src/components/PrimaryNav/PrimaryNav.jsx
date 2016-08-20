import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class PrimaryNav extends React.Component {
	render() {
		let nav = null;
		if ( this.props.routes ) {
			nav = (
				<ul>
					{this.props.routes.map( ( route, index ) => {
						return (
							<li key={ index }>
								<Link to={ route.path }>{ route.name }</Link>
							</li>
						);
					})}
				</ul>
			);
		}
		return (
			<nav>
				<h1>PrimaryNav</h1>
				{ nav }
			</nav>
		);
	}
}