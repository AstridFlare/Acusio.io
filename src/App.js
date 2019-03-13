import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

//importing components
import Navbar from './components/Navigation/Navbar';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
