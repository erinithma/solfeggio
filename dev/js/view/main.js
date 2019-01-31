import React from 'react';
import { NavLink } from 'react-router-dom';
        
export default class Main extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div class="grid">
                    <div class="item">
                        <NavLink to="/тренажер/игра" className="item__content">
                            <img src="/assets/img/play.svg" alt="Игра" width="100" height="100" />
                            Игра
                        </NavLink>
                    </div>
                    <div class="item">
                        <NavLink to="/тренажер/мажор-минор" className="item__content">
                            <img src="/assets/img/mindur.svg" alt="Мажор / минор" width="100" height="100" />
                            Мажор / минор
                        </NavLink>
                    </div>
                    <div class="item">
                        <a class="item__content" href="ноты">
                            <img src="/assets/img/note.svg" alt="Ноты" width="100" height="100" />
                            Ноты
                        </a>
                    </div>      
                    <div class="item">
                        <a class="item__content" href="интервалы">
                            <img src="/assets/img/interval.svg" alt="Интервалы" width="100" height="100" />
                            Интервалы
                        </a>
                    </div>    
                    <div class="item">
                        <a class="item__content" href="трезвучия">
                            <img src="/assets/img/accord.svg" alt="Трезвучия" width="100" height="100" />
                            Трезвучия
                        </a>
                    </div>    
                    <div class="item">
                        <a class="item__content" href="диктант">
                            <img src="/assets/img/dictant.svg" alt="Диктант" width="100" height="100" />
                            Диктант
                        </a>     
                    </div>
                </div>

                <div class="grid">
                    <div class="item">
                        <a class="item__content" href="https://www.litres.ru/pages/biblio_search/?lfrom=284843963&q=%D1%81%D0%BE%D0%BB%D1%8C%D1%84%D0%B5%D0%B4%D0%B6%D0%B8%D0%BE" target="_blank">
                            <img src="/assets/img/book.svg" alt="Книги по сольфеджио онлайн" width="60" height="60" style={{marginBottom: "20px", marginTop: "20px"}}/>
                            Книги по сольфеджио онлайн
                        </a>
                    </div>
                </div>  
            </React.Fragment>
            );
    }
}