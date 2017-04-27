import React from 'react';
import Header from './Header';

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
				<Header/>
				<div id="top">	
					{this.props.children}
	      		</div>
      		</div>
		)
	}
}