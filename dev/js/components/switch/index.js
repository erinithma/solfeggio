import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return <div className="list piano-list">
            <NavLink to="/тренажер/игра">Игра</NavLink>
            <NavLink to="/тренажер/мажор-минор">Мажор / минор</NavLink>
            <NavLink to="/тренажер/ноты">Ноты</NavLink>
            <NavLink to="/тренажер/интервалы">Интервалы</NavLink>
            <NavLink to="/тренажер/диктант">Диктант</NavLink>
        </div>
    }
}