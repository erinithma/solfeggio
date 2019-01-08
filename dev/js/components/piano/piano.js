import React from 'react';
import Octave from './octave';
import { connect } from 'react-redux';
import {LOAD_SOUND} from '../../const';
import $ from 'jquery';

const smWidth = 576;
const mdWidth = 768;
const lgWidth = 992;
const xlWidth = 1200;

import {KEY_DOWN, KEY_UP, SELECT_OCTAVE, INCREMENT_OCTAVE, DECREMENT_OCTAVE} from '../../const';

const workPlace = {
	ids : {
		'Z' : 0, 
		'S' : 1,
		'X' : 2,
		'D' : 3,
		'C' : 4,
		'V' : 5,
		'G' : 6,
		'B' : 7,
		'H' : 8,
		'N' : 9,
		'J' : 10,
        'M' : 11
    }
};

class Piano extends React.Component{

    componentDidMount() {
        this.props.loadSound();
        $(window).on("resize", this.eventListener);
        this.eventListener();
        $("body").on("mouseup", this.onMouseUp);
        $("body").on("keydown", this.onKeyDown);
        $("body").on("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
        $(window).off("resize", this.eventListener);
        this.eventListener();
        $("body").off("mouseup", this.onMouseUp);
        $("body").off("keydown", this.onKeyDown);
        $("body").off("keyup", this.onKeyUp);
    }

    onMouseUp = (e) => {
        if(this.props.lastTouchIndex !== -1)
            this.props.keyUp(this.props.lastTouchIndex);
        this.props.lastTouchIndex = -1;
    }

    onKeyDown = (e) => {
        let key = e.keyCode;

        switch(key){
            case 37:
                return this.props.prevOctave();    
            case 39:
                return this.props.nextOctave();
        }
        
        key = String.fromCharCode(e.keyCode);            
        
        if(key in workPlace.ids){
            const noteKey =  this.props.currentOctave * 12 + workPlace.ids[key];

            this.props.keyDown(noteKey);

            return;
        }

        key = +key;
        
        if(!Number.isNaN(key) && key > 0 && key <=5 ){
            this.props.selectOctave(key - 1);
        }
    }

    onKeyUp = (e) => {
        let key = String.fromCharCode(e.keyCode);            
            
        if(key in workPlace.ids){	
            const noteKey =  this.props.currentOctave * 12 + workPlace.ids[key];

            this.props.keyUp(noteKey);
        }
    }

    eventListener = (e) => {
        if( $(window).width() < smWidth ){
            this.setState({size: "sm"});
        }
        else if( $(window).width() < mdWidth ){
            this.setState({size: "md"});
        }
        else
            this.setState({size: "lg"});
    }

    state = {
        size: 'lg'
    }

    display = (i) => {

        if(this.state.size === "sm"){
            return i === this.props.currentOctave;
        }
        else if(this.state.size === "md"){
            let c = this.props.currentOctave;

            if(c > 0 && c < 4){
                return i >= c - 1 && i <= c + 1;
            }
            else if(c === 0){
                return i <= 2;
            }
            else if(c === 4){
                return i >= 2;
            }
        }
        else{
            return true;
        }
    }

    render(){
        return (
            <div className="piano-wrap">
                <div className="piano-titles">
                    {
                        ['большая октава', 'малая октава', 'первая октава', 'вторая октава' , 'третья октава'].map( (v, i) => 
                            <div className="octave-title" style={{display: this.display(i) ? "flex" : "none"}}>{v}</div> )
                    }
                </div>
                <div className="piano">
                    {
                        (new Array(5)).fill(0).map((_, i) => <Octave current={this.props.currentOctave === i} key={i} index={i} display={this.display(i)}/>)
                    }
                </div>
                <div className="piano-controls">
                    <button id="leftOctave" className="button" onClick={this.props.prevOctave}>←</button>
                    <button id="rightOctave" className="button left-offset" onClick={this.props.nextOctave}>→</button>
                </div>
            </div>  
        );
    }
}

export default connect(
    (state) => (
    {
        currentOctave: state.sound.get("currentOctave"),
        lastTouchIndex: state.sound.get("lastTouchIndex")
    }),
    (dispatch) => ({
        loadSound: () => dispatch({
            type: LOAD_SOUND,
            payload: { urls: (new Array(60)).fill(0).map( (_, i) => `/sound/piano/${i}.mp3` ) }
        }),
        keyDown: (index) => dispatch({
            type: KEY_DOWN,
            payload: {index}
        }),
        keyUp: (index) => dispatch({
            type: KEY_UP,
            payload: {index}
        }),
        selectOctave: (index) => dispatch({
            type: SELECT_OCTAVE,
            payload: {index}
        }),
        nextOctave: () => dispatch({
            type: INCREMENT_OCTAVE
        }),
        prevOctave: () => dispatch({
            type: DECREMENT_OCTAVE
        })    
    })
)(Piano)
  