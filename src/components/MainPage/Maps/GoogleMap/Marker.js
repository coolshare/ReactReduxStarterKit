import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import ReactTooltip from 'react-tooltip'
import {MarkerStyle} from './MarkerStyle'

export default class Marker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }
  handleOnclick(e) {
	  alert("Route:\n"+JSON.stringify(this.props.route, null, "  "))
  }
  render() {
    return (
       <div style={MarkerStyle} data-tip={this.props.text} onClick={this.handleOnclick}>
       <ReactTooltip />
       </div>
    );
  }
}