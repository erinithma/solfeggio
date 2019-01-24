import React from 'react';
import Octave from './octave';
import { connect } from 'react-redux';
import a from '../../const';
import $ from 'jquery';
import { map } from '../../common';

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

        $("body").on("mouseup", this.onMouseUp);
        $("body").on("keydown", this.onKeyDown);
        $("body").on("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
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
        const key = String.fromCharCode(e.keyCode);            
            
        if(key in workPlace.ids){	
            const noteKey =  this.props.currentOctave * 12 + workPlace.ids[key];

            this.props.keyUp(noteKey);
        }
    }

    display = (i) => {

        if(this.props.size === "sm"){
            return i === this.props.currentOctave;
        }
        else if(this.props.size === "md"){
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
                        map(i => <Octave current={this.props.currentOctave === i} key={i} index={i} display={this.display(i)}/>, 5)
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
        lastTouchIndex: state.sound.get("lastTouchIndex"),
        size: state.sound.get("size")
    }),
    (dispatch) => ({
        loadSound: () => dispatch({
            type: a.LOAD_SOUND,
            payload: { urls: map( i => `/sound/piano/${i}.mp3` ) }
        }),
        keyDown: (index) => dispatch({
            type: a.KEY_DOWN,
            payload: {index}
        }),
        keyUp: (index) => dispatch({
            type: a.KEY_UP,
            payload: {index}
        }),
        selectOctave: (index) => dispatch({
            type: a.SELECT_OCTAVE,
            payload: {index}
        }),
        nextOctave: () => dispatch({
            type: a.INCREMENT_OCTAVE
        }),
        prevOctave: () => dispatch({
            type: a.DECREMENT_OCTAVE
        })    
    })
)(Piano)
  