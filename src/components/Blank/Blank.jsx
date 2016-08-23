import React from 'react';
import ReactDOM from 'react-dom';
import './Blank.scss';

export default class Blank extends React.Component {
	render() {
		return (
			<div className="blank">
				<h1 className="blank__title">Route: { this.props.location ? this.props.location.pathname : '/dashboard' }</h1>
				<h2 className="blank__subtitle">This page isn't built out...</h2>
			</div>
		);
	}
}