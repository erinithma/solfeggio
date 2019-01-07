export default class SoundContext {
    static context = new (window.AudioContext || window.webkitAudioContext)();

    static getContext(){
        return SoundContext.context;
    }
}