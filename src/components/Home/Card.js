import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		return (
			<div className="col s12 m4">
				<div className="card">
					<div className="card-image waves-effect waves-block waves-light">
						<img
							className="activator"
							src="https://media.licdn.com/dms/image/C5603AQGYr6xG3rCxbg/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=4S6txJAQoPUOSRmsqCfBNATluLfoK3PAyCn4DgG2fM4"
							alt="Avatar"
						/>
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							Astrid Flare<i className="material-icons right">more_vert</i>
						</span>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>Here is some more information about this product that is only revealed once clicked on.</p>
					</div>
				</div>
			</div>
		);
	}
}
