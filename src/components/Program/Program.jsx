import React from 'react';
import ReactDOM from 'react-dom';
import './Program.scss';

export default class Program extends React.Component {
	render() {
		let styles = {
			backgroundImage: 'url( images/pencil_icons.png )'
		};
		let pricing_options = null;
		if ( this.props.program.pricing_options ) {
			pricing_options = this.props.program.pricing_options.map( ( po, index ) => {
				return (
					<li key={ index }>
						{ po.Name }
					</li>
				);
			});
		}
		return (
			<article className="program">
				<a className="program__close-btn" style={ styles }></a>
				<h2 className="program__title">{ this.props.program.Name }</h2>
				<h3>{ this.props.program.TotalMonthlySales }</h3>
				<ul>{ pricing_options }</ul>
			</article>
		);
	}
}