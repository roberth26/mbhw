import React from 'react';
import ReactDOM from 'react-dom';
import './Program.scss';
import format_number from 'format-number';

export default class Program extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			expanded: false
		};
		this.toggle_expanded = this.toggle_expanded.bind( this );
	}

	toggle_expanded() {
		this.setState({
			expanded: !this.state.expanded
		});
	}

	render() {
		console.log( this.props.program );
		let edit_btn_styles = {
			backgroundImage: 'url( images/pencil_icons.png )'
		};
		return (
			<article className={ this.state.expanded ? 'program program--expanded' :  'program' }>
				<a className="program__edit-btn" style={ edit_btn_styles }></a>
				<h2 className="program__title">{ this.props.program.Name }</h2>
				<h3 className="program__graph-title">Sales by month</h3>
				<img className="program__graph" src="images/graph.png"
					alt={ this.props.program.Name + ' monthly sales' } />
				<div className="program__totals">
					<div className="program__totals__row">
						<div className="program__totals__col col-5">
							<div className="program__totals__title">Total Monthly</div>
							<div className="program__totals__cell">Sales</div>
						</div>
						<div className="program__totals__col col-4">
							<div className="program__totals__title">Current</div>
							<div className="program__totals__cell program__totals__cell--dark">${format_number()( this.props.program.TotalMonthlySales )}</div>
						</div>
						<div className="program__totals__col col-3">
							<div className="program__totals__title program__totals__title--centered">1-Year</div>
							<div className="program__totals__cell">
								<img className="program__totals__graph" src="images/spark_line.png"
									alt={ this.props.program.Name + ' 1-year' } />
							</div>
						</div>
					</div>
				</div>
				<div className="program__collapse">
					<div className="program__pricing-options">
						<div className="program__pricing-options__row program__pricing-options__row--headings">
							<div className="program__pricing-options__col col-5">
								<div className="program__pricing-options__title">Price Name</div>
							</div>
							<div className="program__pricing-options__col col-3">
								<div className="program__pricing-options__title">Current</div>
							</div>
							<div className="program__pricing-options__col col-4">
								<div className="program__pricing-options__title program__pricing-options__title--centered">1-Year</div>
							</div>
						</div>
						{this.props.program.pricing_options.map( ( po, i ) => {
							return (
								<div className="program__pricing-options__row" key={ i }>
									<div className="program__pricing-options__col col-5">
										<div className="program__pricing-options__cell program__pricing-options__cell--dark">{ po.Name }</div>
									</div>
									<div className="program__pricing-options__col col-3">
										<div className="program__pricing-options__cell">${ format_number()( po.Sales ) }</div>
									</div>
									<div className="program__pricing-options__col col-4">
										<div className="program__pricing-options__cell">
											<div className="program__pricing-options__graph-wrapper">
												<img className={ 'program__pricing-options__graph ' + 'program__pricing-options__graph--0' + Math.round( ( Math.random() * 6 ) ) }
													src="images/spark_lines.png"
													alt={ this.props.program.Name + ' 1-year' } />
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<a className="program__collapse-toggle" onClick={ this.toggle_expanded }>{ this.state.expanded ? 'less' : 'more' }</a>
			</article>
		);
	}
}