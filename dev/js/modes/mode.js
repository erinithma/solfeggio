import SoundBuffer from '../classes/sound-buffer';

export default class Mode {
    static sound = new SoundBuffer();

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
}