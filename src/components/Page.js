import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal.js';

import logo from '../images/generic-logo-hi.png';

class Page extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			error: null,
			isLoaded: false,
			aadharVerified: false
	    }
	}

	componentDidMount() {
		// this.getGeoLocation();
		// this.fetchSchedule();
		// dispatch({ type: AGENT_LIST_FETCHED })
	}

	changeAadharStatus() {
		this.setState({
			aadharVerified: true
		});
	}

	render () {
		return (
			<div className="doc-page">
				Document image
				<img src={logo} />
				{
          			!this.state.aadharVerified && (
              			<Modal updateState={ this.changeAadharStatus.bind(this) }/>
            		)
        		}
			</div>

		)
	}
}

export default Page;

