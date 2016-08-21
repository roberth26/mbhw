import React from 'react';
import ReactDOM from 'react-dom';
import './BusinessOverview.scss';
import CreateProgram from '../CreateProgram/CreateProgram.jsx';
import Program from '../Program/Program.jsx';

export default class BusinessOverview extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			show_form: false
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
	render() {
		return (
			<div className="business-overview">
				<aside className="sidebar">
					<a className="program-btn" onClick={ this.show_form }>New Program</a>
				</aside>
				<section className="program-grid">
					<Program />
					<Program />
					<Program />
				</section>
				{ this.state.show_form ? <CreateProgram on_close={ this.hide_form } /> : null }
			</div>
		);
	}
}