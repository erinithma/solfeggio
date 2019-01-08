import React from 'react';
import Piano from '../components/piano';

export default class Play extends React.Component{
    render(){
        return <React.Fragment>
                <Piano />
                <div className="list piano-list">
                    <a href="игра">Игра</a>
                    <a href="мажор-минор">Мажор / минор</a>
                    <a href="ноты">Ноты</a>
                    <a href="интервалы">Интервалы</a>
                    <a href="диктант">Диктант</a>
                </div>
            </React.Fragment>;
    }
}