React-Redux Starter Kit
========================

By Mark Qian 3/2017 (markqian@hotmail.com)

<b>A. The demo page:</b> 

http://coolshare.github.io/ReactReduxStarterKit/

<b>B. Description:</b>

This starter kit is designed to get you up and running as a comprehensive web application.

 - <b>A general web UI layout</b>: 
 
   1). top links to divide business concept into multiple area ("Main" and "Second")<br />
   2). tabs to further divide an area into sub areas<br />
   3). accordions at the right side (in TabA) to provide management UI for different features<br />
   4). master/detail layout to provide an editing environment to handle collection data (Right pane in TabA)<br />
   5). other type of UI like map<br />  
 
 - <b>Access store globally</b>. The store static field of global class holds the reference of Redux store so that
   we can access the store and related method such as dispatch any where instead of pass the store down in the
   component hierarchy. See code details at /services/CommunicationService.js
 
 - <b>React patterns</b>. the following patterns are used in the application
 
   1). *Container/Component*. It is used under /components/Patterns: all the components are written with this pattern.<br/>
   2). *State hoisting and Stateless function (pure function)*: Events are changes in state. Their data needs to be passed to stateful container components parents. Example (in VideoContainer.js and VideoComponent.js):
   
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
   and VideoComponent is a stateless "function".
   
   3). *conditional rendering*. The is an alternative of routing to show different content/page. Example (in MapContainer.js):
   
		class _MapContainer extends Component {
			...
			render() {
			    return (
			    	...
				    	{(this.props.currentMap==="GoogleMap") && <div><center><div>Some bus stops in SF</div></center><GoogleMapContainer style={{"minHeight":"400px"}}/></div>}
				    	{(this.props.currentMap==="MapBox") && <MapBoxContainer style={{"minHeight":"400px"}}/>}				    				...
			    )
			}
		}
	
		const MapContainer = connect(
				  store => {
					    return {
					    	currentMap: store.MapContainerReducer.currentMap
					    };
					  }
					)(_MapContainer);
		export default MapContainer
	
   4).*Render Callbacks*: a function passed as a prop to a component, which allows that component to render something
   		A common use-case of a render callback was to allow a child to render something using data it did not receive in props.
   	Example (RightPane.js)
   	
   		class _RightPane extends React.Component{
			render(){
				let ChildPane = ({ children  }) => children (this.props.currentPage)
				return (
					 <div>
					 	<ChildPane>
					 		{id=>id==="TodoList"?<TodoList/>:id==="HousingInfo"?<HousingInfo/>:null}
					 	</ChildPane>
					 </div>
				)
			}
		}

The goal of this _RightPane is to display <TodoList/> or <HousingInfo/> according this.props.currentPage passed by the parent container (<FormTableContainer>). We first declare ChildPane as a "function" which access another function (children) as parameter and then invoke the function(children passed as parameter) inside ChildPane. ChildPane is used in the render content where Children receives its function parameter (children) as 
		{id=>id==="TodoList"?<TodoList/>:id==="HousingInfo"?<HousingInfo/>:null}
Then this function is invoke as

        children (this.props.currentPage)
        
where id above is this.props.currentPage. What is good on this pattern? The benefit is that ChildPane can be used somewhere else with different content instead of "{id=>id==="TodoList"?<TodoList/>:id==="HousingInfo"?<HousingInfo/>:null}" with the "this.props.currentPag" built-in like a closure.

 5).*Proxy Component*: Wrapping a component with attributes and reuse it.
   
   Example (in TodoList.js)
   
    const Td = props => <td style={{"width":"33%", "border": "1px solid black"}} {...props}/>
		
    class _TodoList extends React.Component{
       ...
        render(){
          ...
            return (		                                    
                <tr  key={index} style={{"background":"#FFF"}}>
                <Td>{todo.id}</Td>
                <Td>{todo.text}</Td>
                <Td> <input style={{"marginLeft":"10px"}} 
                  ...
	   			
        }
    }
    			
   5).*Proxy Component*: a higher-order component is a function that takes a component and returns a new component.
   
   Example (in TodoList.js)   
   
 - <b>Basic function/feature</b> of Redux: connect of React-redux, middleware, dispatching actions, subscription and so on. 
   This kit uses a pure Redux pattern in the area communication and view update so no "setState" is used except local    
   state like input content state impact button enable state. 

 - <b>Other</b> the 3nd-party lib are used included:
 
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