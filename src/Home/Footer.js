import React, { Component } from 'react';

export default class componentName extends Component {
	render() {
		return (
			<div>
				<footer className="page-footer black darken-1">
					<div className="container">
						<div className="row">
							<div className="col l6 offset-l3 s12">
								<div className="divider" />
								<div className="section center">
									<i className="fab fa-facebook space" />
									<i className="fab fa-youtube space" />

									<i className="fab fa-linkedin space" />
								</div>
								<div className="divider" />
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
							<p className="center">© 2019 Acusio Technologies, LLC</p>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
