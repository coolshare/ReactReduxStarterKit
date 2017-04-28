import React, { Component } from 'react';
import Map from 'google-map-react';
import axios from 'axios'
import Marker from './Marker'
import {connect} from 'react-redux'
import cs from '../../../../services/CommunicationService'
//import ReactNative from 'react-native';


const AnyReactComponent = ({ text }) => (
			  <div style={{
			    position: 'relative', color: 'white', background: 'red',
			    height: 40, width: 60, top: -20, left: -30,    
			  }}>
			    {text}
			  </div>
			);

class _GoogleMapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				busRoutes:null	
		}
	}
	  static defaultProps = {
	    center: {lat: 37.773972, lng: -122.431297},
	    zoom: 11
	  };

	  componentDidMount() {
		  var self = this;
		  let request = axios.get("https://transit.land/api/v1/routes?operated_by=o-9q8y-sfmta").then(function(res){
			  cs.store.dispatch({'type':'GoogleMap', 'busRoutes':res.data.routes});
		  });
	  }

	  render() {
		 var self = this;	
		if (self.props.busRoutes===null) {
			return null;
		}
		
		const style = {
			      width: '100vw',
			      height: '100vh'
			    }
		
	    return (
	    	<div style={style}>
			    <Map defaultCenter={this.props.center} defaultZoom={this.props.zoom} >
			       {
			    	   self.props.busRoutes.map( function (route, idx) {
			    		    var latlng = route.geometry.coordinates[0][0]
	                        return (
	                        		<Marker key={idx} lat={latlng[1]} lng={latlng[0]} text={route.stops_served_by_route[0].stop_name} route={route}/>
	                            )
	                    })
			       }
			       
			    </Map>
			</div>
	    );
	  }
	}
	
const GoogleMapContainer = connect(
		  store => {
			    return {
			    	busRoutes: store.GoogleMapReducer.busRoutes
			    };
			  }
			)(_GoogleMapContainer);
export default GoogleMapContainer
	