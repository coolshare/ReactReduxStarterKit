import React from 'react'
import ReactDataGrid from 'react-data-grid';
import {connect} from 'react-redux'
import { Editors, Formatters } from 'react-data-grid-addons';
import cs from '../../../../services/CommunicationService'
import $ from "jquery";

 
class _HousingInfo extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
				data:[]		
		}
		
	    this._columns = [
	      { key: 'address', name: 'Address', resizable: true },
	      { key: 'value', name: 'Value', resizable: true },
	      { key: 'link', name: 'Link', resizable: true} ];
		this.rowGetter = this.rowGetter.bind(this);
		cs.registerGlobal("housingJSONPCallback", function(data){
			cs.dispatch({"type":"LoadHousing", "data":data.properties.comparables});
		});
		
	}

	rowGetter(i) {
		let d = this.props.data[i];
	    let a = d.address;
	    return {"address":a.street+", "+ [a.city, a.state, a.zipcode].join(" "), "value":d.zestimate.amount["#text"]+" "+d.zestimate.amount["@currency"], "link":d.links.homedetails}
	  }
	componentWillMount () {
		$.ajax({
	        url: 'http://coolshare.com/markqian/AngularJS/Directives/RoutedTab/data/House_JSONP.json',
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
				<h4>Housing Info (JSONP)</h4>
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
	    return (<div>[House list is empty]</div>);
	  }
	});

const HousingInfo = connect(
		  store => {
			    return {
			    	data: store.HousingReducer.data
			    };
			  }
			)(_HousingInfo);
export default HousingInfo