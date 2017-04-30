import React from 'react';


/**
* Main container
*/
export default class TopContainer extends React.Component{

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div>				
				<div id="top">	
					{this.props.children}
	      		</div>
      		</div>
		)
	}
}