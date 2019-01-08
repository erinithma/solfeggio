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

    selectValue = null;
    played = false;

    render(){
        return <React.Fragment>
                <Piano />
                <Menu />
                <div>
                    {this.state.guess || this.props.success !== null ? 
                        <React.Fragment>
                            {
                                this.state.guess ? 
                                <button className="button" onClick={() => this.play()}><img width="18" src={play} /> Повторить</button>
                                :
                                <button className="button" onClick={this.play}><img width="18" src={play} /> {this.selectValue !== null ? 'Дальше' : 'Играть'}</button>
                            }
                            <div style={{marginTop: "12px"}}>
                                <button className={`button ${this.props.success !== null && this.selectValue === "major" ? this.props.success ? "button--success" : "button--danger" : ""}`} onClick={() => this.select('major')}><img width="18" src={major} /> Мажор</button>
                                <button className={`button ${this.props.success !== null && this.selectValue === "minor" ? this.props.success ? "button--success" : "button--danger" : ""}`} onClick={() => this.select('minor')}><img width="18" src={minor} /> Минор</button>
                            </div>
                        </React.Fragment>
                        :
                        <button className="button" onClick={this.play}><img width="18" src={play} /> Играть</button>
                    }
                </div>
            </React.Fragment>;
    }

    select = (type) => {
        if(!this.played)
            return;

        this.played = false;
        this.setState({guess: false});
        this.selectValue = type;
        this.props.select(type);
    }

    play = () => {
        this.played = true;
        this.setState({guess: true});
        this.props.play();
    }
}

export default connect(
    (state) => ({
        success: state.sound.get("result") ? state.sound.get("result").success : null
    }),
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
  