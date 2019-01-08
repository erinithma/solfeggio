import React from 'react';
import Octave from './octave';
import { connect } from 'react-redux';
import {LOAD_SOUND} from '../../const';
import $ from 'jquery';

const smWidth = 576;
const mdWidth = 768;
const lgWidth = 992;
const xlWidth = 1200;

class Piano extends React.Component{

    componentDidMount() {
        this.props.loadSound();
        $(window).on("resize", this.eventListener);
        this.eventListener();
    }

    componentWillUnmount() {
        $(window).off("resize", this.eventListener);
        this.eventListener();
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
                        (new Array(5)).fill(0).map((_, i) => <Octave key={i} index={i} display={this.display(i)}/>)
                    }
                </div>
            </div>  
        );
    }
}

export default connect(
    (state) => (
    {
        currentOctave: state.sound.get("currentOctave")
    }),
    (dispatch) => ({
        loadSound: () => dispatch( {
                type: LOAD_SOUND,
                payload: { urls: (new Array(60)).fill(0).map( (_, i) => `/sound/piano/${i}.mp3` ) }
            } )
    })
)(Piano)
  