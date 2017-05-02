import React from 'react'
import {connect} from 'react-redux'
import cs from '../../../../services/CommunicationService'
import $ from "jquery";
import todoStyle from "./Todo.css"

const Td = props => <td style={{"width":"33%", "border": "1px solid black"}} {...props}/>

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
               		<Td>{todo.id}</Td>
               		<Td>{todo.text}</Td>
               		<Td> <input style={{"marginLeft":"10px"}}
               			name="completed_{index}"
                        type="checkbox"
                        checked={todo.completed} 
               			onChange={(e) => cs.store.dispatch({"id":todo.id, "type":"TOGGLE_TODO", "text":todo.text, "completed":todo.completed})}/>
            			</Td>
               </tr>               
            )
        });
		return (
			<div id="todoList" style={{backgroundColor:'#b0e0e6', width:'100%', minHeight:'500px', marginTop:'-10px', marginLeft:'-20px'}}>
				<h4>To-Do List</h4>

				<div style={{'height':'380px', 'marginLeft':'20px', 'marginRight':'20px','overflow':'auto'}}>
					<table style={{'width':'100%',"border": "1px solid black"}}>
						<thead>
							<tr style={{"border": "1px solid black"}}>
								{header}
							</tr>
						</thead>
						<tbody>
							{body}	
						</tbody>
					</table>
				</div>


				<div style={{"width":"90%", "position":"absolute", "height":'80px', 'backgroundColor':'#E1E1E1','bottom':"5px", marginLeft:'5px', marginRight:'5px'}}>
					<div style={{"padding":"10px"}}>
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
