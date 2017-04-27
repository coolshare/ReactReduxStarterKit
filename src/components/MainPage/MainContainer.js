import React from 'react';
import {connect} from 'react-redux'
import cs from '../../services/CommunicationService'
import Footer from './Footer';
import TabAContainer from './TabA/TabAContainer';
import GoogleMapContainer from './Maps/GoogleMap/GoogleMapContainer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MapContainer from './Maps/MapContainer'

/**
* Main container
*/
class _MainContainer extends React.Component{
	componentDidMount () {
	    cs.subscribe(function() {
	    	cs.store.getState();
	    	//alert("listener in Main:"+JSON.stringify(state))
	    })
	  }
	handleSelect(tabId) {
		cs.dispatch({"type":"switchTab", "tabId":tabId})
	}
	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="MainContainer">	
				<Tabs onSelect={this.handleSelect} selectedIndex={this.props.currentTab}>				
					<TabList>
			          <Tab>Form/Table</Tab>
			          <Tab>Maps</Tab>
			          <Tab>Others</Tab>
			        </TabList>
			        <TabPanel>
			        	<TabAContainer/>
			        </TabPanel>
			        <TabPanel>
			        	<MapContainer/>
			        </TabPanel>
			        <TabPanel>
			          <h4>Under construction</h4>
			        </TabPanel>
				</Tabs>
				<Footer/>
      		</div>
		)
	}
}

const MainContainer = connect(
		  store => {
			    return {
			    	currentTab: store.MainContainerReducer.currentTab
			    };
			  }
			)(_MainContainer);
export default MainContainer