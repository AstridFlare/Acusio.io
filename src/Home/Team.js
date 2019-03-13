import React, { Component } from 'react';
import Card from './Card';

export default class Team extends Component {
	render() {
		return (
			<div className="black team-section">
				<div className="container center">
					<h2 className="white-text ">Meet The Team</h2>
					<div className="row">
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		);
	}
}
