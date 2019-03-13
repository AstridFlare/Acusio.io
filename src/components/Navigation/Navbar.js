import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="navbar-fixed">
					<nav className="nav-wrapper black">
						<div className="container">
							<a href="/" className="brand-logo">
								Acusio Technologies
							</a>
							<a href="/" className="sidenav-trigger" data-target="mobile-links">
								<i className="material-icons">menu</i>
							</a>
							<ul className="right hide-on-med-and-down">
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/">About</a>
								</li>
								<li>
									<a href="/">Blog</a>
								</li>

								<li>
									<a href="/" className=" btn btn-floating pink lighten-1">
										AF
									</a>
								</li>
								<li>
									<a href="/">Sign In</a>
								</li>
								<li>
									<a href="/">Sign Up</a>
								</li>
								<li>
									<a href="/">Log Out</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>

				<ul className="sidenav" id="mobile-links">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
			</React.Fragment>
		);
	}
}
