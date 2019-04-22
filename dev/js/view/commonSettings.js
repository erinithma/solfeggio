import React from 'react';
import Piano from '../components/piano';
import Menu from '../components/switch'; 
import { connect } from 'react-redux';
import a from '../const';
import SettingsMode from '../modes/commonSettings';
import Counter from '../components/counter';
import {Row, PianoLike, Button} from '../components/common';
import storage from  '../common/storage';
import { runInThisContext } from 'vm';

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.props.setMode();
        this.limit = storage.get().total;
    }

    save = () => {
        storage.set({total: +this.ref.current.value})
        this.setState({show: true}, () => {
            setTimeout( () => this.setState({show: false}), 2500 );
        })
        
    }

    state = {
        show: false
    }

    ref = React.createRef()

    render(){
        return <React.Fragment>
            <h2>Общие настройки</h2>
            <Row>
                <p>Количество попыток</p>
                &nbsp;&nbsp;<select ref={this.ref} defaultValue={this.limit}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </Row>
            <Button primary onClick={this.save}>Сохранить</Button>
            {
                this.state.show ? <p style={{color: "#06F"}}>Успешно сохранено</p> : ''
            }
        </React.Fragment>;
    }
}

export default connect(
    null,
    (dispatch) => (
    { 
        setMode: () => dispatch({
            type: a.SET_MODE,
            payload: {mode: new SettingsMode()}
        })
    })
)(Settings);
  