import React from 'react'
import {connect} from 'react-redux'
import ReactDataGrid from 'react-data-grid';
import { Editors, Formatters } from 'react-data-grid-addons';
import cs from '../../../../services/CommunicationService'
import $ from "jquery";
const { CheckboxFormatter } = Formatters;
const CheckboxEditor = <CheckboxEditor options={false, true}/>
/**
* Main container
*/
class _TodoList extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
				todos:[]		
		}
		
	    this._columns = [
	      { key: 'id', name: 'ID', resizable: true },
	      { key: 'text', name: 'Text', resizable: true },
	      { key: 'completed', name: 'Completed', resizable: true, editor: CheckboxEditor, formatter: CheckboxFormatter} ];
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
		}
	    
	  }

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="todoList" style={{backgroundColor:'#b0e0e6', minHeight:'500px', marginTop:'-10px', marginLeft:'-20px'}}>
				<h4>To-Do List</h4>
				<div style={{minHeight:'250px'}}>
					<ReactDataGrid
			        columns={this._columns}
			        rowGetter={this.rowGetter}
			        rowsCount={this.props.todos.length}
			        minHeight={500}
					emptyRowsView={EmptyRowsView}
					/>
				</div>
				<div style={{height:'200px'}}>
					<div>
						Text: <input id="textInput" type="text"/>
					</div>
					<div><button onClick={this.addTODO}>Add</button></div>
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