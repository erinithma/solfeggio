import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { smWidth, mdWidth, lgWidth, xlWidth } from '../../common';

const Menu = ({className}) => 
    <div className={`list ${className}`}>
        <NavLink to="/тренажер/игра">Игра</NavLink>
        <NavLink to="/тренажер/мажор-минор">Мажор / минор</NavLink>
        <NavLink to="/тренажер/ноты">Ноты</NavLink>
        <NavLink to="/тренажер/интервалы">Интервалы</NavLink>
        <NavLink to="/тренажер/диктант">Диктант</NavLink>
    </div>;

export default styled(Menu)`
    position: absolute;
    top: 20px;
    right: 0;
    width: 180px;
  
    @media (max-width: ${xlWidth - 1}px){
      top: 110px;
    }
  
    @media (max-width: ${mdWidth - 1}px){
      top: 150px;
    }
  
    @media (max-width: ${smWidth - 1}px){
      display: none !important;
    }
`;