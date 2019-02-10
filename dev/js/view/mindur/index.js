import React from 'react';
import Piano from '../../components/piano';
import Menu from '../../components/switch'; 
import { connect } from 'react-redux';
import a from '../../const';
import MinDurMode from '../../modes/mindur';
import Counter from '../../components/counter';
import {Row, PianoLike, Button, Column}  from '../../components/common';

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

    vkShare = React.createRef();

    getShare = () => {
        //vkShare.current.innerHTML = VK.Share.button({url: 'https://n--d1abeilrfr3a3f.xn--80asehdb', noparse: true, type: 'link', title: 'Тренажер "Мажор / минор" - Мои результаты', image: }); 
        return null;
    }

    render(){
        const {total} = this.props;

        return (
            <React.Fragment>
                <Piano />
                <Menu />
                <PianoLike>
                    {this.state.guess || this.props.success !== null ? 
                        <div>
                            <Row>
                                {
                                    this.state.guess ? 
                                    <Button onClick={() => this.play()}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Повторить</Button>
                                    :
                                    <Button onClick={this.play}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> {this.selectValue !== null ? 'Дальше' : 'Играть'}</Button>
                                }
                                <Counter count={this.props.counter}/>
                            </Row>
                            <Row mt={12}>
                                <Button type={this.props.success !== null && this.selectValue === "major" ? this.props.success ? "success" : "danger" : "dafault"} onClick={() => this.select('major')}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M6 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-3 5.5c2.14 0 3.92-1.5 4.38-3.5H4.62c.46 2 2.24 3.5 4.38 3.5zM9 1C4.57 1 1 4.58 1 9s3.57 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.5c-3.59 0-6.5-2.91-6.5-6.5S5.41 2.5 9 2.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"/></svg> Мажор</Button>
                                <Button type={this.props.success !== null && this.selectValue === "minor" ? this.props.success ? "success" : "danger" : "dafault"} onClick={() => this.select('minor')}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/></svg> Минор</Button>
                            </Row>
                        </div>
                        :
                        <Row>
                            <Button onClick={this.play}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Играть</Button>
                            <Counter count={this.props.counter}/>
                        </Row>
                    }
                </PianoLike>
                {
                    total ?
                    <PianoLike>
                        <h4>Результат</h4>
                        <div>Итого: <i>{total.total}% ({total.totalSuccess} / {total.totalCount})</i></div>
                        <div>Минор: <i>{total.minor}% ({total.minorSuccess} / {total.minorCount})</i></div>
                        <div>Мажор: <i>{total.major}% ({total.majorSuccess} / {total.majorCount})</i></div>

                        <div ref="vkShare"></div>

                        {this.getShare()}
                    </PianoLike>
                    : ''
                }
                
            </React.Fragment>);
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
        success: state.sound.get("result") ? state.sound.get("result").success : null,
        counter: state.sound.get("counter"),
        total: state.sound.get("total")
    }),
    (dispatch) => (
    { 
        setMode: () => dispatch({
            type: a.SET_MODE,
            payload: {mode: new MinDurMode()}
        }),
        select: (type) => dispatch({
            type: a.MODE_SELECT,
            payload: {select: type}
        }),
        play: () => dispatch({
            type: a.MODE_PLAY,
            payload: {value: false}
        })
    })
)(MinDur);
  