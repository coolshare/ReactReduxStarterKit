import React from 'react';
import MainContainer from './Patterns/PatternsContainer'
import Header from './Header'

/**
*
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