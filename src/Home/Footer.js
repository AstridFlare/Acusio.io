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
							<p className="center">© 2019 Acusio Technologies</p>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

// <div className="col l6 s12">
// 								<h5 className="white-text">Acusio Technologies</h5>
// 								<p className="grey-text text-lighten-4">
// 									You can use rows and columns here to organize your footer content.
// 								</p>
// 							</div>
