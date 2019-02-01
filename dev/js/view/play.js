import React from 'react';
import Piano from '../components/piano';
import Menu from '../components/switch'; 
import { connect } from 'react-redux';
import a from '../const';
import PlayMode from '../modes/play';
import Counter from '../components/counter';
import {Row} from '../components/common';

class Play extends React.Component{
    constructor(props){
        super(props);
        this.props.setMode();
    }

    render(){
        return <React.Fragment>
                <Piano />
                <Menu />
                <Row className="piano-wrap">
                    <Counter />
                </Row>
            </React.Fragment>;
    }
}

export default connect(
    null,
    (dispatch) => (
    { 
        setMode: () => dispatch({
            type: a.SET_MODE,
            payload: {mode: new PlayMode()}
        })
    })
)(Play);
  