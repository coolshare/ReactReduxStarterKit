import React from 'react'
import { Accordion, Panel } from 'react-bootstrap';
import styles from './FormTable.css';
import { Link } from 'react-router';
import {connect} from 'react-redux'
import cs from '../../../services/CommunicationService'
/**
* Main container
*/
class _LeftPane extends React.Component{
	handleink(pageId, e) {
		e.preventDefault();
		cs.store.dispatch({'type':'switchPage', 'pageId':pageId});
	}

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="leftPane" style={{minHeight:'500px', backgroundColor:'#e1e1e1'}}>
			<Accordion >
		        <Panel header="Local Activity">
		        	<li><a href="#" onClick={(evt) => this.handleink('TodoList', evt)} className={this.props.currentPage=="TodoList"?"selectedAccordionLink":"unselectedAccordionLink"}>ToDo List</a></li>
		        </Panel>
		        <Panel header="Remote Access">
		        	<li><a href="#" onClick={(evt) => this.handleink('HousingInfo', evt)} className={this.props.currentPage=="HousingInfo"?"selectedAccordionLink":"unselectedAccordionLink"}>Housing Info</a></li>
		        </Panel>
	       </Accordion>
      		</div>
		)
	}
}

const LeftPane = connect(
		  store => {
			    return {
			    	currentPage: store.MainRightPaneReducer.currentPage
			    };
			  }
			)(_LeftPane);
export default LeftPane