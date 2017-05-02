import React from 'react'
import YouTube from 'react-youtube';
/**
*
*/
export default class VideoComponent extends React.Component{
	
	constructor(props) {
	    super(props);
	    this.state = {
	  	      videoId: 'slPVHpHWYxE',
	  	      player: null,
	  	      autoSwitch:true
	  	    };
	    this.onReady = this.onReady.bind(this);
	    this.onPlayVideo = this.onPlayVideo.bind(this);
	    this.onPauseVideo = this.onPauseVideo.bind(this);
	    this.onNextVideo = this.onNextVideo.bind(this);
	    this.onPreVideo = this.onPreVideo.bind(this);
	    this.onStayVideo = this.onStayVideo.bind(this);
	  }
	
	  onReady(event) {
	    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
	    this.setState({
	      player: event.target,
	    });
	  }

	  onPlayVideo() {
	    this.state.player.playVideo();
	  }

	  onPauseVideo() {
	    this.state.player.pauseVideo();
	  }

	  onNextVideo() {
		  this.props.showNext(1);
	  }
	  
	  onPreVideo() {
		  this.props.showNext(-1);
	  }
	  onStayVideo() {
		  if (this.state.autoSwitch===true) {
			  this.props.stopTimer();
		  } else {
			  this.props.resumeTimer();
		  }
		  this.setState(Object.assign({}, this.state, {
			  autoSwitch: !this.state.autoSwitch
	        })) 
	  }
	  
	  render() {
		  const opts = {
			      height: '390',
			      width: '640',
			      playerVars: { // https://developers.google.com/youtube/player_parameters
			        autoplay: 1
			      }
		  };
	    return (
	      <div>
		     <div style={{"margin":"5px"}}>
	    		<input placeholder="Search Videos" onKeyPress={(e)=>{if (e.key==='Enter') this.props.handleSearch(e.target.value);}}/>
	    	</div>
	        <YouTube videoId={this.props.currentVideo.id} onReady={this.onReady} opts={opts}/>
	        <br/>
	        <button onClick={this.onPreVideo}>Previous Video</button>
	        <button onClick={this.onPlayVideo}>Play</button>
	        <button onClick={this.onPauseVideo}>Pause</button>
	        <button onClick={this.onNextVideo}>Next Video</button>
	        <br/>
	        <button onClick={this.onStayVideo}>{this.state.autoSwitch?"Stay Current Video":"Resume Auto Switch Video"}</button>
	        <label style={{"marginTop":"7px", "marginLeft":"7px"}}>Switch period:<select onChange={(e)=>this.props.handlePeriod(e.target.value)}>
	        	<option value="20000">20 second</option>
	        	<option value="300000">30 second</option>
	        	<option value="60000">1 minute</option>
	        	<option value="300000">5 minute</option>
	        	<option value="whole">Whole video</option>
	        </select></label>
	      </div>
	    );
	  }
	}