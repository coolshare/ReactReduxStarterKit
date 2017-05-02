React-Redux Starter Kit
========================

By Mark Qian 3/2017 (markqian@hotmail.com)

<b>A. The demo page:</b> 

http://coolshare.github.io/ReactReduxStarterKit/

<b>B. Description:</b>

This starter kit is designed to get you up and running as a comprehensive web application.

 - A general web UI layout: 
 
   1). top links to divide business concept into multiple area ("Main" and "Second")<br />
   2). tabs to further divide an area into sub areas<br />
   3). accordions at the right side (in TabA) to provide management UI for different features<br />
   4). master/detail layout to provide an editing environment to handle collection data (Right pane in TabA)<br />
   5). other type of UI like map<br />  
 
 - Access store globally. The store static field of global class holds the reference of Redux store so that
   we can access the store and related method such as dispatch any where instead of pass the store down in the
   component hierachy. See code details at /services/CommunicationService.js
 
 - React patterns. the following patterns are used in the application
 
   1). Container/Component. It is used under /components/Pattens: all the components are written with this pattern.
   2). State hoisting: Events are changes in state. Their data needs to be passed to stateful container components parents. Example:
   
	   The event handler resides in VideoContainer and VideoComponent hoists the data entered by users to
	   VideoContainer:
	   
	   class _VideoContainer extends React.Component {
	   		handlePeriod(s) {
				...		
			}
			render() {
				...
			    return (
	   				< VideoComponent  handlePeriod={this.handlePeriod.bind(this)}}... />
	   				...
	   			}
	   		} 
    	export default class VideoComponent extends React.Component{
    		render() {
			  	...
	    		return (
	      			<select onChange={(e)=>this.props.handlePeriod(e.target.value)}>
						...
	        		</select>
	        	}
	       }
    	}
     
 - Basic function/feature of Redux: connect of React-redux, middleware, dispatching actions, subscription and so on. 
   This kit uses a pure Redux pattern in the area communication and view update so no "setState" is used except local    
   state like input content state impact button enable state. 

 - Other the 3nd-party lib are used included:
 
   mapbox-gl, googlemap, react-data-grid, infinite-tree, react-image-gallery, react-tabs, react-youtube 
 
 
<b>C. Instructions for installation</b>

1. download the zip file of this package and unzip it to, say c:\ReactReduxStarterKit<br/>
   or simply run the following<br/>
   
      cd c:\
      git clone https://github.com/coolshare/ReactReduxStarterKit.git ReactReduxStarterKit<br/>
      
2. install environment

      cd c:\ReactReduxStarterKit<br/>
      npm install
      
3. run the application

      npm start
      
4. build a production version

      webpack -p
      
      
   
Go Mark's home page http://MarkQian.com to see more.