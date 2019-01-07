import React from 'react';
import Octave from './octave';
import { connect } from 'react-redux';
import {LOAD_SOUND} from '../../const';

class Piano extends React.Component{

    componentDidMount() {
        this.props.loadSound();
    }

    render(){
        return (
            <div className="piano-wrap">
                <div className="piano-titles">
                    <div className="octave-title">большая октава</div> 
                    <div className="octave-title">малая октава</div> 
                    <div className="octave-title">первая октава</div> 
                    <div className="octave-title">вторая октава</div> 
                    <div className="octave-title">третья октава</div> 
                </div>
                <div className="piano">
                    {
                        (new Array(5)).fill(0).map((_, i) => <Octave key={i} index={i} />)
                    }
                </div>
            </div>  
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        loadSound: () => dispatch( {
                type: LOAD_SOUND,
                payload: { urls: (new Array(60)).fill(0).map( (_, i) => `/sound/piano/${i}.mp3` ) }
            } )
    })
)(Piano)
  