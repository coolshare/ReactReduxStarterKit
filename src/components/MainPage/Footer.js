import React from 'react'
import { Link } from 'react-router';
/**
*
*/
export default class Footer extends React.Component{

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="footer"   style={{margin:'20px'}}>
				<a href="http://markqian.com" target="_blank">See more on Mark's homepage</a>
      		</div>
		)
	}
}