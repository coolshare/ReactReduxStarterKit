import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import cs from '../services/CommunicationService'
import style from './Top.css';
import { browserHistory } from 'react-router';
/**
*
*/
class _Header extends React.Component{

	handleLink = (id, e)=> {
		e.preventDefault();
		browserHistory.push('/ReactReduxStarterKit/'+id);
		cs.store.dispatch({'type':'switchTopLink', 'id':id});
		
	}
	componentDidMount() {
		//debugger
		//cs.store.dispatch({'type':'switchTopLink', 'pageId':'main'});
	}
	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="header"   style={{margin:'5px', 'border':'1px solid #e1e1e1','backgroundColor':'#e1e1e1'}}>
			<Grid bsClass="gridContainer">
				<Row className="show-grid">
			      <Col xs={6} md={6}>
			      	<h3 style={{"margin":"3px"}}>React-Redux Starter Kit</h3>
			      </Col>
			      <Col xs={6} md={6}>
			      	<div style={{"marginTop":"10px"}}>
			      		<span><a href="#" style={{'textCecoration': 'none'}} onClick={(evt) => this.handleLink('main', evt)} className={this.props.currentLink=="main"?"selectedTopLink":"unselectedTopLink"}>Main</a></span>
			      		<span style={{"marginLeft":"40px"}}><a href="#" style={{'textDecoration': 'none'}} onClick={(evt) => this.handleLink('Patterns', evt)} className={this.props.currentLink=="Patterns"?"selectedTopLink":"unselectedTopLink"}>React Patterns</a></span>
			      	</div>
			      </Col>
			    </Row>
			</Grid>
				
      		</div>
		)
	}
}

const Header = connect(
		  store => {
			    return {
			    	currentLink: store.TopLinkReducer.currentLink
			    };
			  }
			)(_Header);
export default Header