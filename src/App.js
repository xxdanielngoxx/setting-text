import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super();
    this.state = {
      color: "red",
      fontSize: 14,
    }
  }

  onSetColor = (params) => {
    this.setState({
      ...this.state,
      color: params,
    });
  }

  onChangeSize = (delta) => {
      const result = this.state.fontSize + delta;
      if (result >= 8 && result <= 36) {
        this.setState({
          ...this.state,
          fontSize: result,
        });
      }
  }

  onSettingDefault = () => {
    this.setState({
      ...this.state,
      color: "red",
      fontSize: 14,
    });
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
            <Reset onSettingDefault={this.onSettingDefault}/>
          </div>
          <Result color={ this.state.color } fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

