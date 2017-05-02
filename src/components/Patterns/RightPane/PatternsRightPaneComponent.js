import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import PhotoContainer from './Photo/PhotoContainer'
import VideoContainer from './Video/VideoContainer'
/**
*
*/
export default class _PatternsRightPaneComponent extends React.Component{
	render(){
		return (
			 <div>
			 	{(this.props.currentPage==="Photo Player") && <PhotoContainer/>}
			 	{(this.props.currentPage==="Video Player") && <VideoContainer/>}
			 </div>
		)
	}
}

