import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
/**
* Main container
*/
export default class VideoComponent extends React.Component{
	
	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		
		if (this.props===undefined || this.props.items===undefined) {
			return null;
		}
		
	    return (
	      <div>
	      Video
	      	
		 </div>
	    );
	}
}