import React, { Component } from 'react';
// import SheduleView from './SheduleView';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Login from './Login.js';
import Page from './Page.js';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			error: null,
			isLoaded: false
	    }
	}

	componentDidMount() {
		// this.getGeoLocation();
		// this.fetchSchedule();
		// dispatch({ type: AGENT_LIST_FETCHED })
	}

	render () {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Login}/>
						<Route path="/page" component={Page} />
					</Switch>
				</BrowserRouter>
			</div>
			)
	}
}

export default App;