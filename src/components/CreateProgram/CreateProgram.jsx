import React from 'react';
import ReactDOM from 'react-dom';
import './CreateProgram.scss';

export default class CreateProgram extends React.Component {
	render() {
		return (
			<div className="create-program" onClick={ this.props.on_close }>
				<div className="create-program__popup">
					<h1>Create Program</h1>
				</div>
			</div>
		);
	}
}