import React from 'react';
import ReactDOM from 'react-dom';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
		this.handle_request = this.handle_request.bind( this );
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

	handle_request( request ) {
		setTimeout( function() {
			if ( !this.mounted ) return;
			this.setState({
				programs: request.data
			});
		}.bind( this ), 3000 ); // wait 3 seconds to simulate network latency
	}

	componentDidMount() {
		this.mounted = true;
    	this.server_request = Axios.get( 'data/programs.json' )
			.then( this.handle_request );
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		let programs = <LoadingIndicator text="Loading Business Overview" />;
		if ( this.state.programs && this.state.programs.length ) {
			programs = this.state.programs.map( ( program, index ) => {
				return <Program key={ index } program={ program } />;
			});
		}
		return (
			<div className="business-overview">
				
				<aside className="sidebar">
					<a className="program-btn" onClick={ this.show_form }></a>
					<span className="program-btn-label">New Program</span>
				</aside>
				<section className="program-grid">{ programs }</section>
				{ this.state.show_form ? <CreateProgram on_close={ this.hide_form } /> : null }
			</div>
		);
	}
}