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
									<a href="https://www.linkedin.com/company/acusio-technologies">
										<i className="fab fa-facebook space" />
									</a>
									<a href="https://www.youtube.com/channel/UCqRcU50cu7jO3DyWDNpMhvA/videos">
										<i className="fab fa-youtube space" />
									</a>

									<a href="https://www.linkedin.com/company/acusio-technologies">
										<i className="fab fa-linkedin space" />
									</a>
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
