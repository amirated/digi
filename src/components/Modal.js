import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NumberFormat from 'react-number-format';

class Modal extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			error: null,
			isLoaded: false,
			aadhar: null,
			otp: null,
			aadharVerified: false,
			otpVerified: false
	    }
	}

	componentDidMount() {
		// this.getGeoLocation();
		// this.fetchSchedule();
		// dispatch({ type: AGENT_LIST_FETCHED })
	}

	aadharInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({aadhar: value});
		this.aadharValidation();
	}

	otpInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({otp: value});
		this.otpValidation();
	}

	aadharValidation() {
		var aadhar = this.state.aadhar;
		var aadharVerified;
		if (aadhar) {
			if (aadhar > 9999999999 && aadhar < 1000000000000) {
				aadharVerified = true;
			} else {
				aadharVerified = false;
			}
		}
		this.setState({
			aadharVerified: aadharVerified
		})
		
	}

	otpValidation() {
		var otp = this.state.otp;
		var otpVerified;
		if (otp) {
			if (otp > 99999 && otp < 1000000) {
				otpVerified = true;
			} else {
				otpVerified = false;
			}
		}
		this.setState({
			otpVerified: otpVerified
		})
	}

	render () {
		return (
			<div className="modal-container">
				<div className="modal-body">
					Register Aadhar
							<NumberFormat format="############" onChange={(event) => this.aadharInput(event)}/>
							<NumberFormat format="######" onChange={(event) => this.otpInput(event)} />
							
					<div onClick={this.props.updateState} className={(this.state.aadharVerified && this.state.otpVerified) ? "verify active" : "verify inactive"} >
						Verify
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;

