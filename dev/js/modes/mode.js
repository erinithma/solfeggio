import Sound from '../classes/sound';
import storage from '../common/storage';

export default class Mode {
    static sound = new Sound();

    get total() {
        return storage.get().total;
    }

    events = {
        counter: null,
        finish: null
    }

    keyDown(index) {
        Mode.sound.get(index).play();
    }

    keyUp(index) {
        const s = Mode.sound.get(index, true);
            
        if(s)
            s.stop();
    }

    loadAll(urls) {
        return Mode.sound.loadAll(urls);
    }

    getResult() {
        return null;
    }

    getCounter() {
        return 0;
    }

    addListener(event, fnc){
        if(event in this.events)
            this.events[event] = fnc;

        return this;
    }

    fire(event, ...args){
        if(this.events[event])
            this.events[event](...args); 

        return this;
    }
}