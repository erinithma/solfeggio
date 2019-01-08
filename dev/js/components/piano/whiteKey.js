import React from 'react';
import { connect } from 'react-redux';
import {KEY_DOWN, KEY_UP} from '../../const';
import {detectTouch} from '../../common/helpers';

class WhiteKey extends React.Component{
    render() {
        return detectTouch() ? 
            <div className={`key white ${this.props.pressed ? 'down ' : ''} ${this.props.color || ''}`} onTouchStart={this.onDown} onTouchEnd={this.onUp}></div>
            : 
            <div className={`key white ${this.props.pressed ? 'down ' : ''} ${this.props.color || ''}`} onMouseDown={this.onDown} onMouseUp={this.onUp}></div>
    }

    onDown = () => {
        this.props.down(this.props.index);
    }

    onUp = () => {
        this.props.up(this.props.index);
    }
}

export default connect(
    (state, ownProps) => (
    {
        pressed: state.sound.get("pressedKeys")[ownProps.index],
        lastTouchIndex: state.sound.get("lastTouchIndex"),
        color: state.sound.get("result") ? state.sound.get("result").colors[ownProps.index] : null
    }),
    (dispatch) => (
    { 
        down: (index) => dispatch({
            type: KEY_DOWN,
            payload: {index, fromMouse: !detectTouch()}
        }),
        up: (index) => dispatch({
            type: KEY_UP,
            payload: {index}
        })  
    })
)(WhiteKey);
  