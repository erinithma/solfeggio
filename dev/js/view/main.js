import React from 'react';
import { NavLink } from 'react-router-dom';
        
export default class Main extends React.Component{
    render(){
        return (
            <div class="grid">
                <div class="item">
                    <NavLink to="/тренажер/игра" className="item__content">
                        <img src="/assets/img/play.svg" alt="Игра" width="128" height="128" />
                        Игра
                    </NavLink>
                </div>
                <div class="item">
                    <NavLink to="/тренажер/игра" className="item__content">
                        <img src="/assets/img/mindur.svg" alt="Мажор / минор" width="128" height="128" />
                        Мажор / минор
                    </NavLink>
                </div>
                <div class="item">
                    <a class="item__content" data-prevent href="ноты">
                        <img src="/assets/img/note.svg" alt="Ноты" width="128" height="128" />
                        Ноты
                    </a>
                </div>      
                <div class="item">
                    <a class="item__content" data-prevent href="интервалы">
                        <img src="/assets/img/interval.svg" alt="Интервалы" width="128" height="128" />
                        Интервалы
                    </a>
                </div>    
                <div class="item">
                    <a class="item__content" data-prevent href="диктант">
                        <img src="/assets/img/dictant.svg" alt="Диктант" width="128" height="128" />
                        Диктант
                    </a>     
                </div>
            </div>);
    }
}