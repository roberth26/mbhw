import React from 'react';
import ReactDOM from 'react-dom';
import './LoadingIndicator.scss';

export default class LoadingIndicator extends React.Component {
	render() {
		return (
			<div className="loading">
				<div className="loading-indicators">
					<div className="loading__indicator">
						<svg className="loading__indicator__graphic"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 36 36">
								<path d="M18,4c7.7,0,14,6.3,14,14h4c0-9.9-8.1-18-18-18S0,8.1,0,18h4C4,10.3,10.3,4,18,4z" />
						</svg>
					</div>
					<div className="loading__indicator loading__indicator--inner">
						<svg className="loading__indicator__graphic"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 36 36">
								<path d="M18,25c-3.9,0-7-3.1-7-7H7c0,6.1,4.9,11,11,11s11-4.9,11-11h-4C25,21.9,21.9,25,18,25z" />
						</svg>
					</div>
				</div>
				<div className="loading__text">{this.props.text}</div>
			</div>
		);
	}
}