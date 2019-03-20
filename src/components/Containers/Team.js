import React, { Component } from 'react';
import Card from './Card';

export default class Team extends Component {
	render() {
		return (
			<div className=" team-section">
				<div className="container center">
					<h2 className="black-text ">Meet The Team</h2>
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
