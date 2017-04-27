import React from 'react';
import Header2 from './Header2';
import RightPane2 from './RightPane2';
import LeftPane2 from './LeftPane2';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
/**
* Main container
*/
export default class SecondContainer extends React.Component{

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="second" style={{margin:'20px'}}>	
				<Header2/>
				<Grid>
					<Row className="show-grid">
				      <Col xs={4} md={8}>
				      	<LeftPane2/>
				      </Col>
				      <Col xs={4} md={8}>
				      	<RightPane2/>
				      </Col>
				    </Row>
				</Grid>
				<a href="http://markqian.com" target="_blank">See more on Mark's homepage</a>
      		</div>
      		
		)
	}
}