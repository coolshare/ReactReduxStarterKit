import React from 'react'
import { Accordion, Panel,PanelGroup } from 'react-bootstrap';
import styles from './FormTable.css';
import {connect} from 'react-redux'
import cs from '../../../services/CommunicationService'
/**
*
*/
class _LeftPane extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			activeKey: '2'
		};
		this.handleSelect = this.handleSelect.bind(this)
	}
	handleink(pageId, e) {
		e.preventDefault();
		cs.store.dispatch({'type':'switchPage', 'pageId':pageId});
	}

	handleSelect(activeKey) {
	    this.setState({ activeKey });
	  }
	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="leftPane" style={{minHeight:'500px', backgroundColor:'#e1e1e1'}}>
				<PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
			  		<Panel header="Local Activity" eventKey="1"><li><a href="#" onClick={(evt) => this.handleink('TodoList', evt)} className={this.props.currentPage=="TodoList"?"selectedAccordionLink":"unselectedAccordionLink"}>ToDo List</a></li></Panel>
		        	<Panel header="Remote Data" eventKey="2"><li><a href="#" onClick={(evt) => this.handleink('HousingInfo', evt)} className={this.props.currentPage=="HousingInfo"?"selectedAccordionLink":"unselectedAccordionLink"}>Housing Info</a></li></Panel>
		        </PanelGroup>
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