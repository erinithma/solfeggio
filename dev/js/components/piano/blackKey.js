import React from 'react';
import { connect } from 'react-redux';
import {KEY_DOWN, KEY_UP} from '../../const';

class BlackKey extends React.Component{
    render() {
        return <div className={`key black${this.props.pressed ? ' down' : ''}`} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}></div>
    }

    mouseDown = () => {
        this.props.down(this.props.index);
    }

    mouseUp = () => {
        if(this.props.lastTouchIndex !== -1)
            this.props.up(this.props.lastTouchIndex);
    }
}

export default connect(
    (state, ownProps) => (
    {
        pressed: state.sound.get("pressedKeys")[ownProps.index],
        lastTouchIndex: state.sound.get("lastTouchIndex")        
    }),
    (dispatch) => (
    { 
        down: (index) => dispatch({
                type: KEY_DOWN,
                payload: {index, fromTouch: true}
        }),
        up: (index) => dispatch({
                type: KEY_UP,
                payload: {index}
        })  
    })
)(BlackKey);
  