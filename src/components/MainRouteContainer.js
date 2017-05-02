import React from 'react';
import MainContainer from './MainPage/MainContainer'
import Header from './Header'

/**
*
*/
export default class MainRouteContainer extends React.Component{

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