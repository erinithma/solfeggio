import React from 'react';
import keys from './keys';
import styled from 'styled-components';

const Level = ({index, className}) => 
    <div className={className}>
        <keys.White index={index}/>
        <keys.Black index={index + 1}/>
    </div>;

const SingleLevel = ({index, className}) => 
    <div className={className}>
        <keys.White index={index}/>
    </div>;

const stylize = (component) => 
    styled(component)`
        position: relative;
        flex-grow: 1;
    `;

export default {
    Normal: stylize(Level),
    Single: stylize(SingleLevel)
}
