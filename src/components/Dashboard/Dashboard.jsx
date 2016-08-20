import React from 'react';
import ReactDOM from 'react-dom';
import Blank from '../Blank/Blank.jsx';

export default class Dashboard extends React.Component {
	render() {
		return this.props.children ? this.props.children : <Blank />;
	}
}