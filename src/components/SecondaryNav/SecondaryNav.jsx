import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class SecondaryNav extends React.Component {
	render() {
		return (
			<nav>
				<h1>SecondaryNav</h1>
				<ul>
					{if ( this.props.routes ) {
						this.props.routes.map( ( route, index ) => {
							return (
								<li key={ index }>
									<Link to={ route.path }>{ route.name }</Link>
								</li>
							);
						})
					}}
				</ul>
			</nav>
		);
	}
}