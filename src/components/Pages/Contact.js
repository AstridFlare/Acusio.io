import React, { Component } from 'react';

import Team from '../Containers/Team';
import Footer from '../Containers/Footer';

export default class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<Team />
				<Footer />
			</React.Fragment>
		);
	}
}
