import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Form from './Form.js';

import logo from '../images/generic-logo-hi.png';
import digio_logo from '../images/digio_logo.jpg';

class Login extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			error: null,
			isLoaded: false,
			email: '',
			emailValid: false
	    }
	}

	componentDidMount() {
		// this.getGeoLocation();
		// this.fetchSchedule();
		// dispatch({ type: AGENT_LIST_FETCHED })
	}

	// emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

	handleUserInput (e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value});
		this.checkValidation();

		// console.log(this.state.emailValid)
	}

	checkValidation() {
		var email = this.state.email;
		// var emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	var emailValid = re.test(String(email).toLowerCase());
		this.setState({
			emailValid: emailValid
		})
	}

	// changePage() {
	// 	this.props.history.push('/page');
	// }

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
				<div className="google">
					sanket@digio.in uses Gmail?
					<br/>
					login using google
					<br/>
					<button> g+ Google</button>
				</div>
				<div className="login-form">
					<form className="demoForm">
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input type="email" className={this.state.emailValid ? "form-control is-valid" : "form-control is-valid"} name="email" onChange={(event) => this.handleUserInput(event)} />
						</div>
						<div className={this.state.emailValid ? "nav-item active" : "nav-item inactive"}>
							<Link to="/page" className="nav-link">
								CONTINUE
							</Link>
						</div>
					</form>
					
				</div>
				<hr/>
				<div className="footer">
					<img src={digio_logo}/>
					<span>
						Powered by<br/><a href="www.digio.in">www.digio.in</a>
					</span>
				</div>
			</div>
		)
	}
}

export default Login;

