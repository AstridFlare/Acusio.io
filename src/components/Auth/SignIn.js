import React, { Component } from 'react';

export default class SignIn extends Component {
	render() {
		return (
			<div className="container blog-list">
				<div className="card">
					<div className="row">
						<form className="col s12">
							<div className="row">
								<div className="input-field col s6">
									<input id="first_name" type="text" className="validate" />
									<label for="first_name">First Name</label>
								</div>
								<div className="input-field col s6">
									<input id="last_name" type="text" className="validate" />
									<label for="last_name">First Name</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			// <div class="row">
			// 	<form className="col s12">
			// 		<div className="row">
			// 			<div className="input-field col s6">
			// 				<input placeholder="Placeholder" id="first_name" type="text" className="validate">
			// 					<label for="first_name">First Name</label>
			// 				</input>
			// 			</div>
			// 		</div>
			// 	</form>
			// </div>
		);
	}
}
