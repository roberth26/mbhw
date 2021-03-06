import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'es6-promise';
import Axios from 'axios';
import format_number from 'format-number';
import './BusinessOverview.scss';
import CreateProgram from '../CreateProgram/CreateProgram.jsx';
import Program from '../Program/Program.jsx';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator.jsx';

export default class BusinessOverview extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			show_form: false,
			programs: []
		};
		this.show_form = this.show_form.bind( this );
		this.hide_form = this.hide_form.bind( this );
	}

	show_form() {
		this.setState({
			show_form: true
		});
	}

	hide_form() {
		this.setState({
			show_form: false
		});
	}

	componentDidMount() {
		this.mounted = true;
		let self = this;

		Axios.all([
			Axios.get( 'data/programs.json' ),
			Axios.get( 'data/pricing-options.json' )
		]).then( Axios.spread( function( programs, pricing_options ) {
			programs = programs.data;
			pricing_options = pricing_options.data;
			for ( let i = 0; i < pricing_options.length; i++ ) {
				let matching_program = programs.find( ( p ) => {
					return p.ProgramID == pricing_options[ i ].ProgramID
				});
				if ( matching_program ) {
					if ( matching_program.pricing_options ) {
						matching_program.pricing_options.push( pricing_options[ i ] );
					} else {
						matching_program.pricing_options = [];
						matching_program.pricing_options.push( pricing_options[ i ] );
					}
				}
			}
			programs = programs.sort( ( a, b ) => {
				return a.TotalMonthlySales - b.TotalMonthlySales;
			});
			setTimeout( function() {
				if ( !self.mounted ) return;
				self.setState({
					programs: programs
				});
			}, 1000 ); // simulate network latency
		}));
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		if ( !this.state.programs || !this.state.programs.length ) {
			return (
				<div className="business-overview">
					<LoadingIndicator text="Loading Business Overview" />
				</div>
			);
		}

		let top_3 = [];
		let programs = this.state.programs.slice( 0 );
		let end = programs.length - 4;
		for ( let i = programs.length - 1; i > end; i-- ) {
			top_3.push( programs[ i ] );
			programs.splice( i, 1 );
		}
		programs.reverse();
		return (
			<div className="business-overview">
				<aside className="business-overview__sidebar">
					<a className="program-btn" onClick={ this.show_form }></a>
					<span className="program-btn-label">New Program</span>
				</aside>
				<div className="business-overview__content">
					<section className="program-grid">
						{top_3.map( ( program, index ) => {
							return (
								<div key={ index } className="program-grid__col">
									<Program program={ program } />
								</div>
							);
						})}
					</section>
					<section className="program-table">
						<div className="program-table__headings">
							<div className="program-table__col">
								<div className="program-table__title program-table__title--large">All Programs</div>
							</div>
							<div className="program-table__col">
								<div className="program-table__title">Monthly Sales</div>
							</div>
							<div className="program-table__col">
								<div className="program-table__title">Monthly Attendance</div>
							</div>
						</div>
						{programs.map( ( program, index ) => {
							return (
								<div className="program-table__row">
									<div className="program-table__col">
										<div className="program-table__cell">
											<span>{ program.Name }</span>
											<a className="program-table__collapse-toggle">more</a>
										</div>
									</div>
									<div className="program-table__col">
										<div className="program-table__cell">${ format_number( { padRight: 2 } )( program.TotalMonthlySales ) }</div>
									</div>
									<div className="program-table__col">
										<div className="program-table__cell">{ program.MonthlyAttendance } <small>visits</small></div>
									</div>
								</div>
							);
						})}
					</section>
					<ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={ 250 } transitionLeaveTimeout={ 100 }>
						{ this.state.show_form ? <CreateProgram key={ 'create-program' } on_close={ this.hide_form } /> :  null }
					</ReactCSSTransitionGroup>
				</div>
			</div>
		);
	}
}