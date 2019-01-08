export function detectTouch () {
    return (('ontouchstart' in window) || window['DocumentTouch'] && document instanceof DocumentTouch);
}