import React from 'react';
import WhiteKey from './whiteKey';
import BlackKey from './blackKey';

export default class Level extends React.Component{
    render(){
        return (
            <div className="level">
                <WhiteKey index={this.props.index}/>
                <BlackKey index={this.props.index + 1}/>
            </div>);
    }
}