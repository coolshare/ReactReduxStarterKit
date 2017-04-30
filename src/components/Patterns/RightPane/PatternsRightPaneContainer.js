import React, { Component } from 'react'
import {connect} from 'react-redux'
import PatternsRightPaneComponent from './PatternsRightPaneComponent'
import RemoteService from '../../../services/RemoteService'
import cs from '../../../services/CommunicationService'

class _PatternsRightPaneContainer extends React.Component {
	render() {
		
		if (this.props.items===null) {
			return null;
		}
		
	    return (
	      < PatternsRightPaneComponent  currentPage={this.props.currentPage}
	        /> 
	    )
	  }
}	
const PatternsRightPaneContainer = connect(
		  store => {
			  
			    return {
			    	currentPage: store.PatternsRightPaneReducer.currentPage,
			    };
			  }
			)(_PatternsRightPaneContainer);
export default PatternsRightPaneContainer