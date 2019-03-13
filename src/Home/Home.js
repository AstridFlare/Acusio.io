import React, { Component } from 'react';

import Card from './Card';
import Footer from './Footer';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="row home-content">
					<h2 className="center">Meet The Team</h2>
					<Card />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
