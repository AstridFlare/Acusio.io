import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

export default class LandingPage extends Component {
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.slider');
			M.Slider.init(elems);
		});
	}
	render() {
		return (
			<div class="slider fullscreen">
				<ul class="slides">
					<li>
						<img
							src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/ZUY6S38/videoblocks-night-view-over-new-york-city-4k-time-lapse_svfbu52bw_thumbnail-full01.png"
							alt="new york"
						/>
						<div class="caption center-align">
							<h3 className="bold">Acusio Technologies</h3>
							<hr />
							<br />
							<h5 class="light grey-text text-lighten-3">
								Developing a cohesive and personalized user experience that augments human cognitive
								ability | Startup
							</h5>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

// <li>
// <img
// 	src="http://res.cloudinary.com/tempest/image/upload/c_limit,cs_srgb,dpr_1.0,q_80,w_10000/MTI5MzY3NjMxODg2MDY0MDk0.jpg"
// 	alt="lake"
// />
// <div class="caption left-align">
// 	<h3>Left Aligned Caption</h3>
// 	<h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
// </div>
// </li>
// <li>
// <img
// 	src="https://images.wallpaperscraft.com/image/roses_bouquet_red_dark_background_119245_3840x2400.jpg"
// 	alt="roses"
// />
// <div class="caption right-align">
// 	<h3>Right Aligned Caption</h3>
// 	<h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
// </div>
// </li>
