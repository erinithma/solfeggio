import React from 'react';
import Level from './level';
import LevelSingle from './levelSingle';

export default class Octave extends React.Component{
    render(){
        return (
            <div className={`octave${this.props.current ? " octave--current" : ""}`} style={{display: this.props.display ? "flex" : "none"}}>
                <Level index={this.props.index * 12 + 0}/>
                <Level index={this.props.index * 12 + 2}/>
                <LevelSingle index={this.props.index * 12 + 4}/>
                <Level index={this.props.index * 12 + 5}/>
                <Level index={this.props.index * 12 + 7}/>
                <Level index={this.props.index * 12 + 9}/>
                <LevelSingle index={this.props.index * 12 + 11}/>
            </div>
            );
    }
}