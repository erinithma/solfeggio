import React from 'react';
import WhiteKey from './whiteKey';

export default class Level extends React.Component{
    render(){
        return (
            <div className="level">
                <WhiteKey index={this.props.index}/>
            </div>);
    }
}