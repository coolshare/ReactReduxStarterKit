import React from 'react';
import RightPane from './RightPane';
import LeftPane from './LeftPane';
import { Grid, Row, Col } from 'react-bootstrap';
/**
*
*/
export default class FormTableContainer extends React.Component{

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="FormTableContainer">	
				<Grid bsClass="gridContainer">
					<Row className="show-grid">
				      <Col xs={4} md={4} style={{"maxWidth":"250px"}}>
				      	<LeftPane/>
				      </Col>
				      <Col xs={8} md={8}>
				      	<RightPane/>
				      </Col>
				    </Row>
				</Grid>
      		</div>
		)
	}
}