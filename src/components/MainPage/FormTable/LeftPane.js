import React from 'react'
import { Accordion, Panel } from 'react-bootstrap';
import styles from './FormTable.css';
import { Link } from 'react-router';
import cs from '../../../services/CommunicationService'
/**
* Main container
*/
export default class LeftPane extends React.Component{
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
			<Accordion>
		        <Panel header="Local Activity" eventKey='1'>
		        	<li><a href="#" onClick={(evt) => this.handleink('TodoList', evt)}>ToDo List</a></li>
		        </Panel>
		        <Panel header="Remote Access" eventKey='2'>
		        	<li><a href="#" onClick={(evt) => this.handleink('HousingInfo', evt)}>Housing Info</a></li>
		        </Panel>
	       </Accordion>
      		</div>
		)
	}
}