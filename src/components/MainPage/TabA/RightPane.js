import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TodoList from './TodoList/TodoList'
import HousingInfo from './HousingInfo/HousingInfo'

class _RightPane extends React.Component{
	render(){
		return (
			 <div>
			 	{(this.props.currentPage==="TodoList") && <TodoList/>}
			 	{(this.props.currentPage==="HousingInfo") && <HousingInfo/>}
			 </div>
		)
	}
}

const RightPane = connect(
		  store => {
			    return {
			    	currentPage: store.MainRightPaneReducer.currentPage
			    };
			  }
			)(_RightPane);
export default RightPane