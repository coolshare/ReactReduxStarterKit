import React, { Component } from 'react'
import {connect} from 'react-redux'
import VideoComponent from './VideoComponent'
import RemoteService from '../../../../services/RemoteService'
import cs from '../../../../services/CommunicationService'
const defaultPeriond = 20000;
const order = ["rating", "relevance", "title", "videoCount", "viewCount", "viewCount" ];
class _VideoContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.count = -1;
		this.continueTiming = true;
		this.period = defaultPeriond;
	}
	componentDidMount() {
		var self = this;
		this.handleSearch();
	}
	handlePeriod(s) {
		if (s=="whole") {
			this.continueTiming = false;
		} else {
			this.period = parseInt(s);
		}
		
	}
	
	handleSearch(s, token) {
		let self = this;
		self.search = s || this.props.search || "go pro"
		let od = order[Math.floor(Math.random()*order.length)]
		let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order="+od+"&key=%20AIzaSyBlfRGzLyvc1QXnaH_h4oXE6gkmtxluUe8&q="+encodeURIComponent(self.search);
		if (token) {
			url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order="+od+"&key=%20AIzaSyBlfRGzLyvc1QXnaH_h4oXE6gkmtxluUe8&pageToken="+token;
		}
		RemoteService.fetch(null, "videos", url).then(function(res) {
			self.videos = [];
			var items = res.data.items;
			self.nextPageToken = res.data.nextPageToken;
			for (var i=0; i<items.length; i++) {
				if (items[i].id.videoId==undefined) {
					continue;
				}
				self.videos.push({"id":items[i].id.videoId, "des":items[i].snippet.description})
			};
			//cs.dispatch({"type":"loadVideos", "items":self.videos});
			self.showNext(1);
		});
	}
	
	showNext(d, t) {
		var self = this;
		
		if (t) {
			setTimeout(() => {
				if (this.continueTiming) {
					this.playNext(d);	
				}			
			}, self.period);
		} else {
			this.playNext(d, self.period);
		}
		
	}
	
	stopTimer() {
		this.continueTiming = false;
	}
	
	resumeTimer() {
		this.continueTiming = true;
		this.playNext(1, self.period);
	}
	playNext(d) {
		var self = this;
		self.count+=d;
		if (self.count>self.videos.length-1) {
			self.handleSearch(self.search, self.nextPageToken);
			self.count = 0;
		} else if (self.count<0) {
			self.count = self.videos.length-1;
		}
		let item = self.videos[self.count];

		cs.dispatch({"type":"playVideo", "item":item});
		console.log("count="+self.count)
		self.showNext(1, self.period);
	}

	render() {
		
		if (this.props.items===null) {
			return null;
		}
		var self = this;
	    return (
	      < VideoComponent  handlePeriod={this.handlePeriod.bind(this)} stopTimer={this.stopTimer.bind(this)} resumeTimer={this.resumeTimer.bind(this)} currentVideo={this.props.currentVideo} showNext={this.showNext.bind(this)} handleSearch={this.handleSearch.bind(this)}
	        /> 
	    )
	  }
}	
const VideoContainer = connect(
		  store => {
			  
			    return {
			    	items: store.PatternsRightPaneReducer.loadVideos,
			    	videoSearch: store.PatternsRightPaneReducer.videoSearch,
			    	currentVideo: store.PatternsRightPaneReducer.currentVideo
			    };
			  }
			)(_VideoContainer);
export default VideoContainer