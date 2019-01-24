import React from 'react';
import keys from './keys';

export default class Level extends React.Component{
    render(){
        return (
            <div className="level">
                <keys.White index={this.props.index}/>
                <keys.Black index={this.props.index + 1}/>
            </div>);
    }
}