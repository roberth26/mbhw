import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Axios from 'axios';
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
				let matching_program = programs.filter( ( p ) => {
					return p.ProgramID == pricing_options[ i ].ProgramID
				});
				matching_program = matching_program[ 0 ];
				if ( matching_program ) {
					if ( matching_program.pricing_options ) {
						matching_program.pricing_options.push( pricing_options[ i ] );
					} else {
						matching_program.pricing_options = [];
						matching_program.pricing_options.push( pricing_options[ i ] );
					}
				}
			}
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
		let programs = <LoadingIndicator text="Loading Business Overview" />;
		if ( this.state.programs && this.state.programs.length ) {
			programs = this.state.programs.map( ( program, index ) => {
				return (
					<div key={ index } className="program-grid__col">
						<Program program={ program } />
					</div>
				);
			});
		}
		return (
			<div className="business-overview">				
				<aside className="sidebar">
					<a className="program-btn" onClick={ this.show_form }></a>
					<span className="program-btn-label">New Program</span>
				</aside>
				<section className="program-grid">
					<div className="program-grid__row">{ programs }</div>
				</section>
				<ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={ 250 } transitionLeaveTimeout={ 100 }>
					{ this.state.show_form ? <CreateProgram key={ 'create-program' } on_close={ this.hide_form } /> :  null }
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}