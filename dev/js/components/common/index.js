import React from 'react';
import styled from 'styled-components';

const transformSize = (size) => {
    switch(typeof size){
        case 'string':
            return size;
        case 'number':
            return `${size}px`;
        default:
            return 0;
    }
}

const getMargin = (props) => {
    return `
        margin-top: ${transformSize(props.mt)} !important;
        margin-bottom: ${transformSize(props.mb)} !important;
        margin-left: ${transformSize(props.ml)} !important;
        margin-right: ${transformSize(props.mr)} !important;
    `;
}

export const Row = styled( ({className, children}) => {
    return (
        <div className={className}>{children}</div>
    )
})`
    display: flex;
    ${props => getMargin(props)}
`;

export const Column = styled( ({className, children}) => {
    return (
        <div className={className}>{children}</div>
    )
})`
    display: flex;
    flex-direction: column;
    ${props => getMargin(props)}
`;

export const PianoLike = ({className, children}) => {
    return (
        <div className={`piano-like ${className}`}>{children}</div>
    )
};

export const Button = styled(({className, children, id, onClick = () => {}, type = 'default', primary, success, danger}) => {
    const map = {
        primary: 'button--primary',
        success: 'button--success',
        danger: 'button--danger'
    }
    const typeClass = map[type] || (primary ? map['primary'] : success ? map['success'] : danger ? map['danger'] : '');

    return (
        <button id={id} className={`button ${typeClass} ${className}`} onClick={onClick}>{children}</button>
    )
})`
    ${props => getMargin(props)}
`;