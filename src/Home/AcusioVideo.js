import React, { Component } from 'react';

export default class AcusioVideo extends Component {
	render() {
		return (
			<div className="video-container">
				<iframe
					title="Acusio Technologies Welcome Video"
					width="853"
					height="480"
					src="https://www.youtube.com/embed/YFz4vwBADwc"
					frameBorder={'0'}
					allowFullScreen
				/>
			</div>
		);
	}
}
