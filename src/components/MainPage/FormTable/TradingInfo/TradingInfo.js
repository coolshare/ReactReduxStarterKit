import React from 'react'
import ReactDataGrid from 'react-data-grid';
import {connect} from 'react-redux'
import { Editors, Formatters } from 'react-data-grid-addons';
import cs from '../../../../services/CommunicationService'
import $ from "jquery";

 
class _TradingInfo extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
				data:[]		
		}
		
	    this._columns = [
	      { key: 'name', name: 'Name', resizable: true },
	      { key: 'price', name: 'Price', resizable: true },
	      { key: 'symbol', name: 'Symbol', resizable: true},
	      { key: 'type', name: 'Type', resizable: true},
	      { key: 'utctime', name: 'UTC Time', resizable: true},
	      { key: 'volume', name: 'Volume', resizable: true}];
		this.rowGetter = this.rowGetter.bind(this);
		cs.registerGlobal("tradingJSONPCallback", function(data){
			cs.dispatch({"type":"LoadTrading", "data":data.list.resources});
		});
		
	}

	rowGetter(i) {
		let d = this.props.data[i];
	    let a = d.resource.fields;
	    return {"name":a.name, "price":a.price, "symbol":a.symbol, "type":a.type, "utctime":a.utctime, "volume":a.volume}
	  }
	componentWillMount () {
		$.ajax({
	        url: 'https://verdant.tchmachines.com/~coolsha/markqian/AngularJS/Directives/RoutedTab/data/Trade_JSONP.json',
	        dataType: "jsonp",
	        crossDomain: true,
	        jsonpCallback:'aaa',//<<<
	        success: function() { console.log("success"); }, 
	        error: function() { console.log("error"); } 
	    });
	 }

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="todoList" style={{backgroundColor:'#b0e0e6', minHeight:'500px', marginTop:'-10px', marginLeft:'-20px'}}>
				<h4>Trading Info (JSONP)</h4>
				<div style={{minHeight:'250px'}}>
					<ReactDataGrid
			        columns={this._columns}
			        rowGetter={this.rowGetter}
			        rowsCount={this.props.data.length}
			        minHeight={500}
					emptyRowsView={EmptyRowsView}
					/>
				</div>
				
      		</div>
		)
	}
}
import createReactClass from 'create-react-class'
const EmptyRowsView = createReactClass({
	  render() {
	    return (<div>[Trade list is empty]</div>);
	  }
	});

const TradingInfo = connect(
		  store => {
			    return {
			    	data: store.TradingReducer.data
			    };
			  }
			)(_TradingInfo);
export default TradingInfo