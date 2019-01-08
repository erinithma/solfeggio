import React from 'react';
import Piano from '../../components/piano';
import Menu from '../../components/switch'; 
import major from './img/major.svg';
import minor from './img/minor.svg';
import play from './img/play.svg';
import { connect } from 'react-redux';
import { SET_MODE, MODE_SELECT, MODE_PLAY } from '../../const';
import MinDurMode from '../../modes/mindur';

class MinDur extends React.Component{
    constructor(props){
        super(props);
        this.props.setMode();
    }

    state = {
        guess: false
    }

    render(){
        return <React.Fragment>
                <Piano />
                <Menu />
                <div>
                    {this.state.guess ? 
                        <React.Fragment>
                            <button className="button" onClick={() => this.play()}><img width="18" src={play} /> Повторить</button>
                            <button className="button" onClick={() => this.select('major')}><img width="18" src={major} /> Мажор</button>
                            <button className="button" onClick={() => this.select('minor')}><img width="18" src={minor} /> Минор</button>
                        </React.Fragment>
                        :
                        <button className="button" onClick={this.play}><img width="18" src={play} /> Играть</button>
                    }
                </div>
            </React.Fragment>;
    }

    select = (type) => {
        this.setState({guess: false});
        this.props.select(type);
    }

    play = () => {
        this.setState({guess: true});
        this.props.play();
    }
}

export default connect(
    null,
    (dispatch) => (
    { 
        setMode: () => dispatch({
            type: SET_MODE,
            payload: {mode: new MinDurMode()}
        }),
        select: (type) => dispatch({
            type: MODE_SELECT,
            payload: {select: type}
        }),
        play: () => dispatch({
            type: MODE_PLAY,
            payload: {value: false}
        })
    })
)(MinDur);
  