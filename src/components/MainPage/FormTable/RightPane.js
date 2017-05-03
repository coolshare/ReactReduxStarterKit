import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TodoList from './TodoList/TodoList'
import HousingInfo from './HousingInfo/HousingInfo'
import TradingInfo from './TradingInfo/TradingInfo'


function ChildPane(children) {
	return children(id)
}

class _RightPane extends React.Component{
	render(){
		let ChildPane = ({ children  }) => children (this.props.currentPage)
		return (
			 <div>
			 	<ChildPane>
			 		{id=>id==="TodoList"?<TodoList/>:id==="HousingInfo"?<HousingInfo/>:id==="TradingInfo"?<TradingInfo/>:null}
			 	</ChildPane>
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