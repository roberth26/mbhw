import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header { ...this.props } />
				<main className="main">
					<div className="container">
						{ React.cloneElement( this.props.children, this.props ) }
					</div>
				</main>
			</div>
		);
	}
}