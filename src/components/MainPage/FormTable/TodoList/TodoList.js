import React from 'react'
import {connect} from 'react-redux'
import cs from '../../../../services/CommunicationService'
import $ from "jquery";
import todoStyle from "./Todo.css"

/**
* Main container
*/
class _TodoList extends React.Component{

	constructor(props) {
		super(props);
		this.state = {'enableAdd':false}
	    this._columns = [
	      { key: 'id', name: 'ID'},
	      { key: 'text', name: 'Text'},
	      { key: 'completed', name: 'Completed'} ];
		this.rowGetter = this.rowGetter.bind(this);
		
	}

	rowGetter(i) {
	    return this.props.todos[i];
	  }
	componentWillMount () {
	    this.count = 0;
	    var self = this;
	    this.addTODO = function() {
			cs.store.dispatch({"id":(++self.count), "type":"ADD_TODO", "text":$("#textInput").val(), "completed":false});
			$("#textInput").val("")
			self.setState({'enableAdd':false});
		}
	    
	  }

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		let header = this._columns.map((td, index) => {
            return (		                                    
               <th key={index} style={{"width":"33%", "border": "1px solid black", "background":"#E1E1E1"}}>{td.name}</th>               
            )
        });
		let body = this.props.todos.map((todo, index) => {
            return (		                                    
               <tr  key={index} style={{"background":"#FFF"}}>
               		<td style={{"width":"33%", "border": "1px solid black"}}>{todo.id}</td>
               		<td style={{"width":"33%", "border": "1px solid black"}}>{todo.text}</td>
               		<td style={{"width":"33%", "border": "1px solid black"}}>{todo.completed}</td>
               </tr>               
            )
        });
		return (
			<div id="todoList" style={{backgroundColor:'#b0e0e6', minHeight:'500px', marginTop:'-10px', marginLeft:'-20px'}}>
				<h4>To-Do List</h4>
				<div style={{minHeight:'250px'}}>
					<table style={{"minWidth":"500px", "width":"100%", "border": "1px solid black"}}>
						<tbody>
							<tr style={{"border": "1px solid black"}}>
								{header}
							</tr>
							{body}	
						</tbody>
					</table>
				</div>
					<br/>
				<div style={{height:'100px'}}>
					<div>
						<input id="textInput" type="text" onChange={(e) => this.setState({enableAdd: e.target.value != ''})}/>
			           <button className="addButton" onClick={this.addTODO} disabled={!this.state.enableAdd}>Add</button>
					</div>
				</div>
      		</div>
		)
	}
}

const TodoList = connect(
		  store => {
			    return {
			    	todos: store.TodoReducer
			    };
			  }
			)(_TodoList);
export default TodoList
import createReactClass from 'create-react-class'
const EmptyRowsView = createReactClass({
	  render() {
	    return (<div>[To-do list is empty]</div>);
	  }
	});