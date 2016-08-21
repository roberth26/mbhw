import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header.jsx';

export default class App extends React.Component {
	render() {
		let child_props = {
			routes: this.props.routes,
			location: this.props.location
		};
		return (
			<div>
				<Header { ...child_props } />
				<main className="main">
					<div className="container">
						{ React.cloneElement( this.props.children, child_props ) }
					</div>
				</main>
			</div>
		);
	}
}