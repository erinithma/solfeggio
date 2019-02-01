import React from 'react';
import styled from 'styled-components';

export const Row = styled( ({className, children, mt, mb}) => {
    return (
        <div className={className}>{children}</div>
    )
})`
    display: flex;
    ${props => `
        margin-top: ${props.mt || 0}px;
        margin-bottom: ${props.mb || 0}px;
    `
    }
`;

export const Column = styled( ({className, children, mt, mb}) => {
    return (
        <div className={className}>{children}</div>
    )
})`
    display: flex;
    flex-direction: column;
    ${props => `
        margin-top: ${props.mt || 0}px;
        margin-bottom: ${props.mb || 0}px;
    `
    }
`;

export const PianoLike = ({className, children}) => {
    return (
        <div className={`${className} piano-like`}>{children}</div>
    )
};