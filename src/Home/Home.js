import React, { Component } from 'react';

import AcusioVideo from './AcusioVideo';
import Team from './Team';
import Footer from './Footer';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<AcusioVideo />
				<Team />
				<Footer />
			</React.Fragment>
		);
	}
}
