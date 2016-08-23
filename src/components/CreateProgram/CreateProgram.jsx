import React from 'react';
import ReactDOM from 'react-dom';
import './CreateProgram.scss';

export default class CreateProgram extends React.Component {
	constructor( props ) {
		super( props );
		this.handle_click = this.handle_click.bind( this );
		this.handle_submit = this.handle_submit.bind( this );
	}

	handle_click( event ) {
		if ( event.target == this.refs.background )
			this.props.on_close();			
	}

	handle_submit( event ) {
		event.preventDefault();
		this.props.on_close();	
	}

	render() {
		return (
			<div className="create-program" onClick={ this.handle_click } ref="background">
				<form className="create-program__popup" onSubmit={ this.handle_submit }>
					<h1 className="create-program__title">Create Program</h1>
					<input className="create-program__input" name="program-name" type="text" placeholder="Program Name" />
					<div className="create-program__select">
						<select name="program-type" defaultValue="program-type">
							<option disabled value="program-type">Program Type</option>
							<option value="count-series">Count Series</option>
							<option value="time-series">Time Series</option>
							<option value="membership">Membership</option>
						</select>
					</div>
					<div className="create-program__input-group">
						<input className="create-program__input-group__input" name="allow-online-scheduling" type="checkbox" />
						<label className="create-program__input-group__label" htmlFor="allow-inline-scheduling">Allow Online Scheduling</label>
					</div>
					<div className="create-program__input-group">
						<input className="create-program__input-group__input" name="default-capacity" type="number" />
						<label className="create-program__input-group__label" htmlFor="default-capacity">Default Capacity</label>
					</div>
					<label className="create-program__label" htmlFor="display">Display On:</label>
					<select className="create-program__multi-select" name="display" multiple>
						<option value="classes">Classes</option>
						<option value="appointments">Appointments</option>
						<option value="workshops">Workshops</option>
						<option value="outside">Outside</option>
						<option value="inside">Inside</option>
						<option value="gym">Gym</option>
					</select>
					<button className="create-program__button" type="submit" onSubmit={ this.handle_submit }>Create</button>
				</form>
			</div>
		);
	}
}