import Sound from '../classes/sound';

export default class Mode {
    static sound = new Sound();

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
}