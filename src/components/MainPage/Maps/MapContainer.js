import React, { Component } from 'react';
import {connect} from 'react-redux'
import GoogleMapContainer from './GoogleMap/GoogleMapContainer';
import MapBoxContainer from './MapBox/MapBoxContainer';
import cs from '../../../services/CommunicationService'

class _MapContainer extends Component {
	
	handleRadioSelect(id, e) {
		cs.store.dispatch({'type':'switchMap', 'id':id});
	}

	render() {
	    return (
	    	<div>
		    	<div className="container">
		    	  <div className="row">
		    	  	<form>
			    	  	<div className="col-sm-6">					    	  
			    	        <div className="radio">
			    	          <label>
			    	            <input type="radio" value="GoogleMap" name="map" checked={this.props.currentMap==="GoogleMap"} onClick={(e)=>this.handleRadioSelect("GoogleMap", e)} />
			    	            Google Map
			    	          </label>
			    	        </div>
			    	     </div>
			    	     <div className="col-sm-6">
			    	        <div className="radio">
			    	          <label>
			    	            <input type="radio" value="MapBox" name="map" checked={this.props.currentMap==="MapBox"} onClick={(e)=>this.handleRadioSelect("MapBox", e)} />
			    	            MapBox GL
			    	          </label>
			    	        </div>
			    	      </div>
			    	   </form>
		    	  </div>
		    	</div>
		    	{(this.props.currentMap==="GoogleMap") && <div><center><div>Some bus stops in SF</div></center><GoogleMapContainer style={{"minHeight":"400px"}}/></div>}
		    	{(this.props.currentMap==="MapBox") && <MapBoxContainer style={{"minHeight":"400px"}}/>}				    	
	    	</div>
	    )
	}
}

const MapContainer = connect(
		  store => {
			    return {
			    	currentMap: store.MapContainerReducer.currentMap
			    };
			  }
			)(_MapContainer);
export default MapContainer
