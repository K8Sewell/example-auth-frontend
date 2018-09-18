import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Register from './pages/Register'
import AuthService from './services'
import Protected from './pages/Protected'
import Public from './pages/Public'

class App extends Component {
	render() {
		// creates new instance of AuthService class
		let auth = new AuthService()
		return (
			<div>
				<Router>
					<Switch>
						{(auth.loggedIn())
						// if logged in
						? <Switch>
							<Route path="/public" component={Public} />
							<Route path="/protected" component={Protected} />
							<Route path="/register" component={Register} />
						</Switch>
						// if not logged in (ie Guest User)
						: <Switch>
							<Route path="/public" component={Public} />
							<Redirect from="/protected" to="/register" />
							<Route path="/register" component={Register} />
						</Switch>}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
