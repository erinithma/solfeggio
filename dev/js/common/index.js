import $ from 'jquery';

export const smWidth = 576;
export const mdWidth = 768;
export const lgWidth = 992;
export const xlWidth = 1200;

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

export function random (min = 0, max = 12 * 5 - 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fill(count = 60, value = null) {
    return new Array(count).fill(value);
}

export function map(clb, count = 60) {
    return fill(count).map( (_, i) => clb(i) );
}

export function build(obj) {
    Object.keys(obj).forEach( v => {
        if(!obj[v])
            obj[v] = v;
        else
            obj[v] = [].map.call(obj[v], w => w === '%' ? v : w);
    });

    return obj;
}