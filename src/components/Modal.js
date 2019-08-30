import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Modal extends Component {
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

	render () {
		return (
			<div className="modal-container">
				<div className="modal-body">
					Modal
					<div onClick={this.props.updateState}>
						Verify
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;

