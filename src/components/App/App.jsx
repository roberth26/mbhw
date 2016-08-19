import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

export default class App extends React.Component {
	render() {
		return (
			<div>
				{ this.props.children }
				<p>test</p>
			</div>
		);
	}
}