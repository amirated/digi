import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/generic-logo-hi.png';

class Login extends Component {
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
			<div className="login-page">
				<div className="top-bar">
					<div className="left-info">
						<span>
							Sign document using
						</span>
						<span>
							sanket@digio.in
						</span>
					</div>
					<div className="right-info">
						<img src={logo} />
					</div>
				</div>
				<div className="login-form">
					<div className="nav-item">
						<Link to="/page" className="nav-link">
							CONTINUE
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;

