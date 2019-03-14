import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

export default class Navbar extends Component {
	componentDidMount() {
		var elem = document.querySelector('.sidenav');
		M.Sidenav.init(elem, {
			edge: 'left',
			inDuration: 250
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className="navbar-fixed">
					<nav className="nav-wrapper black">
						<div className="container">
							<a href="/" className="brand-logo">
								Acusio
							</a>
							<a href="/" className="sidenav-trigger" data-target="mobile-links">
								<i className="material-icons">menu</i>
							</a>
							<ul className="right hide-on-med-and-down">
								<li>
									<NavLink to="/">Home</NavLink>
								</li>

								<li>
									<NavLink to="/blog">Blog</NavLink>
								</li>

								<li>
									<a href="/" className=" btn btn-floating pink darken-1">
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

				<ul className="sidenav black " id="mobile-links">
					<li>
						<a className="white-text" href="/">
							Home
						</a>
					</li>
					<li>
						<a className="white-text" href="/">
							Blog
						</a>
					</li>
					<li>
						<a className="white-text" href="/">
							Contact
						</a>
					</li>
				</ul>
			</React.Fragment>
		);
	}
}
