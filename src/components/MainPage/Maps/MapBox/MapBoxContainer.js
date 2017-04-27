import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class  MapBoxContainer extends React.Component {			
		  render() {
			  return (
						  <ReactMapboxGl 
						  style="mapbox://styles/mapbox/streets-v8"
						  accessToken="pk.eyJ1IjoiY29vbHNoYXJlIiwiYSI6ImNqMXp2Y3k5cDAxeWUyd281eWY5OGZxdzcifQ.FjJLTEhyNieh8E942GDHrQ"
						  containerStyle={{
						    height: "100vh",
						    width: "100vw"
						  }}>
						    <Layer
						      type="symbol"
						      id="marker"
						      layout={{ "icon-image": "marker-15" }}>
						      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
						    </Layer>
						</ReactMapboxGl>  
			  )
			  
			  
			  
		  }
		}