import React from 'react';
import Piano from '../components/piano';
import Menu from '../components/switch'; 
import { connect } from 'react-redux';
import { SET_MODE } from '../const';
import PlayMode from '../modes/play';

class Play extends React.Component{
    constructor(props){
        super(props);
        this.props.setMode();
    }

    render(){
        return <React.Fragment>
                <Piano />
                <Menu />
            </React.Fragment>;
    }
}

export default connect(
    null,
    (dispatch) => (
    { 
        setMode: () => dispatch({
            type: SET_MODE,
            payload: {mode: new PlayMode()}
        })
    })
)(Play);
  