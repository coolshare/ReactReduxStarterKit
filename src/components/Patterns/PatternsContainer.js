import React from 'react';
import { Container } from 'react-container-component';
import PatternsComponent from './PatternsComponent'

/**
* Main container
*/
export default class PatternsContainer extends Container {
	constructor() {
	     super();
	     this.setComponent(PatternsComponent);
	}

}
