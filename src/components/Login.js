import React from 'react'
import { Link } from 'react-router'

/**
* LoginForm
**/
export default class  Login extends React.Component{

	/**
	* render
	* @return {ReactElement} markup
	*/
	render(){
		return (	
			<div className="form_container" style={{margin:'20px'}}>
				<div className="header_logo"></div>
				<form className="form-login" >
		            <div className="field"  style={{margin:'10px'}}>
    					<input name="email" type="text" tabIndex="1" placeholder="Email Address"/>
		            </div>
		            <div className="field"   style={{margin:'10px'}}>
    					<input name="password" type="password" tabIndex="2" placeholder="Password"/>
		            </div>
		            
					<Link to="/main" className="login_btn btn-default"   style={{margin:'10px'}}><button>Log In</button></Link>
					<div>This page is only a place holder for a login screen:</div>
					<p>Just click at "Log in" button to continue</p>
    			</form>
			</div> 
		);
	}
}

