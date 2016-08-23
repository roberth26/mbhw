import React from 'react';
import ReactDOM from 'react-dom';
import './Program.scss';

export default class Program extends React.Component {
	render() {
		let styles = {
			backgroundImage: 'url( images/pencil_icons.png )'
		};
		return (
			<article className="program">
				<a className="program__close-btn" style={ styles }></a>
				<h2 className="program__title">{ this.props.program.Name }</h2>
			</article>
		);
	}
}