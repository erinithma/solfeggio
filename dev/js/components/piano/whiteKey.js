import React from 'react';
import { connect } from 'react-redux';
import {KEY_DOWN, KEY_UP} from '../../const';

class WhiteKey extends React.Component{
    render() {
        return <div className={`key white${this.props.pressed ? ' down' : ''}`} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}></div>
    }

    mouseDown = () => {
        this.props.down(this.props.index);
    }

    mouseUp = () => {
        this.props.up(this.props.index);
    }
}

export default connect(
    (state, ownProps) => (
    {
        pressed: state.sound.get("pressedKeys")[ownProps.index]
    }),
    (dispatch) => (
    { 
        down: (index) => dispatch({
                type: KEY_DOWN,
                payload: {index}
        }),
        up: (index) => dispatch({
                type: KEY_UP,
                payload: {index}
        })  
    })
)(WhiteKey);
  