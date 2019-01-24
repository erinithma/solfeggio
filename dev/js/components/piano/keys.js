import React from 'react';
import { connect } from 'react-redux';
import a from '../../const';
import {detectTouch} from '../../common/helpers';
import styled from 'styled-components';

class Key extends React.Component{
    render() {
        return detectTouch() ? 
            <div className={this.props.className} onTouchStart={this.onDown} onTouchEnd={this.onUp}></div>
            : 
            <div className={this.props.className} onMouseDown={this.onDown} onMouseUp={this.onUp}></div>
    }

    onDown = () => {
        this.props.down(this.props.index);
    }

    onUp = () => {
        this.props.up(this.props.index);
    }
}

function _connect(component){
    return connect(
        (state, ownProps) => (
        {
            pressed: state.sound.get("pressedKeys")[ownProps.index],
            lastTouchIndex: state.sound.get("lastTouchIndex"),
            color: state.sound.get("result") ? state.sound.get("result").colors[ownProps.index] : null
        }),
        (dispatch) => (
        { 
            down: (index) => dispatch({
                type: a.KEY_DOWN,
                payload: {index, fromMouse: !detectTouch()}
            }),
            up: (index) => dispatch({
                type: a.KEY_UP,
                payload: {index}
            })  
        })
    )(component);
}

const BlackKey = styled(Key)`

    cursor: pointer;
    border-radius: 0 0 2px 2px;

    background-color: #777;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    position: absolute;
    left: 50%;
    width: 60%;
    margin-left: 20%;
    top: 0;
    z-index: 1;
    height: 65%;
  
    &:hover {
        background-color: #666;
    }
  
    ${props => 
        props.color === 'red' ? `background-color: #C00;` : 
        props.color === 'green' ? `background-color: #0C0;` : ''
    }

    ${props => 
        props.pressed ? `height: 63%;` : ''
    }
`;

const WhiteKey = styled(Key)`

    cursor: pointer;
    border-radius: 0 0 2px 2px;

    background-color: white;
    border-bottom: 1px solid black;
    border-left: 1px solid #777;
    border-right: 1px solid black;
    background-size: 100%;
    height: 100%;
    width: 100%;

    &:hover {
        background-color: #eee;
    }

    ${props => 
        props.color === 'red' ? `background-color: #F00;` : 
        props.color === 'green' ? `background-color: #0C3` : ''
    }

    ${props => 
        props.pressed ? `
            height: 98%;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
        ` : ''
    }
`;

export default {
    White: _connect(WhiteKey),
    Black: _connect(BlackKey)
}
