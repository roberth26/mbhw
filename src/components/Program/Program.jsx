import React from 'react';
import ReactDOM from 'react-dom';
import './Program.scss';

export default class Program extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			expanded: false
		};
		this.expand = this.expand.bind( this );
		this.collapse = this.collapse.bind( this );
	}

	expand() {
		this.setState({
			expanded: true
		});
	}

	collapse() {
		this.setState({
			expanded: false
		});
	}

	render() {
		let styles = {
			backgroundImage: 'url( images/pencil_icons.png )'
		};
		let pricing_options = this.props.program.pricing_options.map( ( po, index ) => {
			return (
				<li key={ index } className="program__pricing-options__item">
					{ po.Name }
				</li>
			);
		});
		return (
			<article className={ this.state.expanded ? 'program program--expanded' :  'program' }>
				<a className="program__edit-btn" style={ styles }></a>
				<h2 className="program__title">{ this.props.program.Name }</h2>
				<h3 className="program__graph-title">Sales by month</h3>
				<img className="program__graph" src="images/graph.png" alt={ this.props.program.name + ' monthly sales' } />
				<div className="program__totals">
					<div className="row">
						<div className="col-4 program__totals__title">Total Monthly</div>
						<div className="col-4 program__totals__title">Current</div>
						<div className="col-4 program__totals__title">1-Year</div>
					</div>
					<div className="row">
						<div className="col-4">Sales</div>
						<div className="col-4">$$$</div>
						<div className="col-4">graph</div>
					</div>
				</div>
				<a className="program__more-btn" onClick={ this.expand }>more</a>
				<h3>{ this.props.program.TotalMonthlySales }</h3>
				<div className="program__collapse">
					<ul className="program__pricing-options">{ pricing_options }</ul>
				</div>
				<a className="program__less-btn" onClick={ this.collapse }>less</a>
			</article>
		);
	}
}