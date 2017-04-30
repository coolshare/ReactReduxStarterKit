import React from 'react';
import PatternsRightPaneContainer from './RightPane/PatternsRightPaneContainer';
import PatternsLeftPaneContainer from './LeftPane/PatternsLeftPaneContainer';
import { Grid, Row, Col } from 'react-bootstrap';

const PatternsComponent = (props) => {
	return (
			<div id="PatternsComponent">	
				<Grid bsClass="gridContainer">
					<Row className="show-grid">
				      <Col xs={4} md={4}>
				      	<PatternsLeftPaneContainer/>
				      </Col>
				      <Col xs={8} md={8}>
				      	<PatternsRightPaneContainer/>
				      </Col>
				    </Row>
				</Grid>
      		</div>
		)
}
export default PatternsComponent;
