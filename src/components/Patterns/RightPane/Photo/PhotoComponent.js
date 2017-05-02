import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
/**
*
*/
export default class PhotoComponent extends React.Component{
	
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
	      	<div style={{"margin":"5px"}}>
	      		<input placeholder="Search photos" onKeyPress={(e)=>{if (e.key==='Enter') this.props.handleSearch(e.target.value);}}/>
	      	</div>
	      	<div>
		      <ImageGallery
		        items={this.props.items}
		        slideInterval={2000}
		        onImageLoad={this.handleImageLoad} lazyLoad={true} autoPlay={true}/>
		    </div>
		 </div>
	    );
	}
}