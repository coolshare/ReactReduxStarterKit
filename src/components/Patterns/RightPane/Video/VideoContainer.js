import React, { Component } from 'react'
import {connect} from 'react-redux'
import VideoComponent from './VideoComponent'
import RemoteService from '../../../../services/RemoteService'
import cs from '../../../../services/CommunicationService'

class _VideoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.count = 0;
	}
	componentDidMount() {
		var self = this;
		this.handleSearch();
	}
	
	handleSearch(s) {
		
		let search = s || this.props.search || "yellow flower"
		RemoteService.fetch(null, "photos", "https://pixabay.com/api/?key=5239248-c509b1ffda01e71efccc0caaa&per_page=200&q="+encodeURIComponent(search)).then(function(res) {
			self.photos = [];
			var hits = res.data.hits;
			
			for (var i=0; i<hits.length; i++) {
				
				self.photos.push({ "original":hits[i].userImageURL, "thumbnail":hits[i].userImageURL, "description":hits[i].tags})
			};
			cs.dispatch({"type":"loadVideos", "items":self.photos});
			//self.showNext();
		});
	}
	
	showNext() {
		var self = this;
		setTimeout(() => {
			if (self.count>self.photos.length-1) {
				self.count = 0;
			}
			
			cs.dispatch({"type":"playVideo", "item":self.photos[self.count]});
			self.count++;
			self.showNext();
		}, 2000);
	}

	render() {
		
		if (this.props.items===null) {
			return null;
		}
		
	    return (
	      < VideoComponent  items={this.props.items} handleSearch={this.handleSearch.bind(this)}
	        /> 
	    )
	  }
}	
const VideoContainer = connect(
		  store => {
			  
			    return {
			    	item: store.PatternsRightPaneReducer.item,
			    	items: store.PatternsRightPaneReducer.items
			    };
			  }
			)(_VideoContainer);
export default VideoContainer