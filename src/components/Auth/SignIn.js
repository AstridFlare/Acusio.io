import React, { Component } from 'react';

export default class SignIn extends Component {
	render() {
		return (
			<div className="container blog-list">
				<div className="card">
					<div className="row">
						<form className="col s12 form-padding">
							<div className="row">
								<div className="input-field col s6">
									<input id="first_name" type="text" className="validate" />
									<label htmlFor="first_name">First Name</label>
								</div>
								<div className="input-field col s6">
									<input id="last_name" type="text" className="validate" />
									<label htmlFor="last_name">First Name</label>
								</div>
							</div>

							<div className="row">
								<div className="input-field col s12">
									<input id="email" type="email" className="validate" />
									<label htmlFor="email">Email</label>
								</div>
							</div>

							<div className="row">
								<div className="input-field col s12">
									<input id="password" type="password" className="validate" />
									<label htmlFor="password">Password</label>
								</div>
							</div>
							<div className="center">
								<div className="input-field ">
									<button
										className="btn pulse waves-effect waves-light pink"
										type="submit"
										name="action"
									>
										Login
										<i className="material-icons right">send</i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

// <div class="row">
//     <div class="input-field col s12">
//          <input id="password" type="password" class="validate">
//             <label for="password">Password</label>
// </div>
