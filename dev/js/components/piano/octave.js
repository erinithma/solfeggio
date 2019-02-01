import React from 'react';
import levels from './levels';

const Octave = ({current, className, index}) => 
    <div className={`octave${current ? " octave--current" : ""} ${className}`}>
        <levels.Normal index={index * 12 + 0}/>
        <levels.Normal index={index * 12 + 2}/>
        <levels.Single index={index * 12 + 4}/>
        <levels.Normal index={index * 12 + 5}/>
        <levels.Normal index={index * 12 + 7}/>
        <levels.Normal index={index * 12 + 9}/>
        <levels.Single index={index * 12 + 11}/>
    </div>;

export default Octave;