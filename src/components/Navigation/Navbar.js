import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="/about">About</NavLink>
								</li>
								<li>
									<NavLink to="/blog">Blog</NavLink>
								</li>

								<li>
									<a href="/" className=" btn btn-floating pink lighten-1">
										AF
									</a>
								</li>
								<li>
									<NavLink to="/signin">Sign In</NavLink>
								</li>
								<li>
									<NavLink to="/signout">Sign Out</NavLink>
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
