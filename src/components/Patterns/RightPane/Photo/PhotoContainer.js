import React, { Component } from 'react'
import {connect} from 'react-redux'
import PhotoComponent from './PhotoComponent'
import RemoteService from '../../../../services/RemoteService'
import cs from '../../../../services/CommunicationService'

class _PhotoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.count = 0;
	}
	componentDidMount() {
		var self = this;
		this.handleSearch();
	}
	
	handleSearch(s) {
		let self = this;
		let search = s || this.props.photoSearch || "pet"
		RemoteService.fetch(null, "photos", "https://pixabay.com/api/?key=5239248-c509b1ffda01e71efccc0caaa&per_page=200&q="+encodeURIComponent(search)).then(function(res) {
			self.photos = [];
			var hits = res.data.hits;
			
			for (var i=0; i<hits.length; i++) {
				
				self.photos.push({ "original":hits[i].userImageURL, "thumbnail":hits[i].userImageURL, "description":hits[i].tags})
			};
			cs.dispatch({"type":"loadPhotos", "items":self.photos});
			//self.showNext();
		});
	}


	render() {
		
		if (this.props.items===null) {
			return null;
		}
		
	    return (
	      < PhotoComponent  items={this.props.items} handleSearch={this.handleSearch.bind(this)} photoSearch={this.props.photoSearch}
	        /> 
	    )
	  }
}	
const PhotoContainer = connect(
		  store => {
			  
			    return {
			    	items: store.PatternsRightPaneReducer.phtotoItems,
			    	photoSearch: store.PatternsRightPaneReducer.photoSearch
			    };
			  }
			)(_PhotoContainer);
export default PhotoContainer