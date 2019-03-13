import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//importing components
import Navbar from './components/Navigation/Navbar';
import Blog from './components/Blog/Blog';
import SignIn from './components/Auth/SignIn';
import Home from './Home/Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/blog" component={Blog} />
						<Route path="/signin" component={SignIn} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
