import React from 'react';
import { Container } from 'react-container-component';
import PatternsLeftPaneComponent from './PatternsLeftPaneComponent'


export default class PatternsLeftPaneContainer extends React.Component {
	constructor(props) {
		super(props);
		this.data = {
			    id: 'Patterns',
			    name: 'React Patterns',
			    children: [{
			        id: 'Container',
			        name: 'Container/Component',
			        children: [{
			    	        id: 'Photo',
			    	        name: 'Photo List'
			    	    }, {
			    	        id: 'Video',
			    	        name: 'Video List'
			    	    }]
			    	}, {
			        id: 'Others',
			        name: 'Others'
			    }]
			};
	}
	
	render() {
	    return (
	      < PatternsLeftPaneComponent data={this.data}
	        /> 
	    )
	  }
}