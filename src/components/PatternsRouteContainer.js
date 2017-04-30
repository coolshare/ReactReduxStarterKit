import React from 'react';
import MainContainer from './Patterns/PatternsContainer'
import Header from './Header'

/**
* Main container
*/
export default class PatternsRouteContainer extends React.Component{

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div>				
				<Header/>	
				<MainContainer/>
      		</div>
		)
	}
}