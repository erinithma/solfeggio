import $ from 'jquery';

const smWidth = 576;
const mdWidth = 768;
const lgWidth = 992;
const xlWidth = 1200;

export function detectTouch() {
    return (('ontouchstart' in window) || window['DocumentTouch'] && document instanceof DocumentTouch);
}

export function getSize() {
    if( $(window).width() < smWidth ){
        return "sm";
    }
    else if( $(window).width() < mdWidth ){
        return "md";
    }
    else if( $(window).width() < lgWidth )
        return "lg";
    else
        return "xl";
}

export function random (min, max) {
    var min_ = min || 0;
    var max_ = max || 12 * 5 - 1; 
    return Math.floor(Math.random() * (max_ - min_ + 1)) + min_;
}

export function fill (value = null, count = 60) {
    return new Array(count).fill(value);
}