import React, { Component } from 'react';

export default class componentName extends Component {
	render() {
		return (
			<div>
				<footer className="page-footer pink darken-1">
					<div className="container">
						<div className="row">
							<div className="col l6 s12">
								<h5 className="white-text">Acusio Technologies</h5>
								<p className="grey-text text-lighten-4">
									You can use rows and columns here to organize your footer content.
								</p>
							</div>
							<div className="col l4 offset-l2 s12">
								<h5 className="white-text">Links</h5>
								<ul>
									<li>
										<a className="grey-text text-lighten-3" href="#!">
											Link 1
										</a>
									</li>
									<li>
										<a className="grey-text text-lighten-3" href="#!">
											Link 2
										</a>
									</li>
									<li>
										<a className="grey-text text-lighten-3" href="#!">
											Link 3
										</a>
									</li>
									<li>
										<a className="grey-text text-lighten-3" href="#!">
											Link 4
										</a>
									</li>
								</ul>
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

// <a className="grey-text text-lighten-4 right" href="#!">
// 								More Links
// 							</a>
