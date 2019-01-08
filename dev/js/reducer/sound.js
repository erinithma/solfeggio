import SoundBuffer from '../classes/sound-buffer';
import { Record } from 'immutable';
import { 
    LOAD_SOUND, 
    READY, 
    KEY_DOWN,
    KEY_UP, 
    SELECT_OCTAVE, 
    INCREMENT_OCTAVE, 
    DECREMENT_OCTAVE 
    } from '../const';

const Sound = new Record({
    sound: new SoundBuffer(),
    state: 'empty',
    pressedKeys: new Array(60).fill(false),
    currentOctave: 2,
    lastTouchIndex: -1
});

export default (sound = new Sound(), action) => {
    const {type, payload} = action;

    switch(type){
        case LOAD_SOUND:
            return sound.set("state", "loading")
        case LOAD_SOUND + READY:
            return sound.set("state", "loaded");     
        case KEY_DOWN:
            if(payload.fromTouch){
                sound = sound.set("lastTouchIndex", payload.index);
            }
            return sound
                .update('pressedKeys', (pressedKeys) => 
                    pressedKeys.map( (v, i) => 
                        (i === payload.index) ? true : v
                    )
                );    
        case KEY_UP:
            return sound
                .update('pressedKeys', (pressedKeys) => 
                    pressedKeys.map( (v, i) => 
                        (i === payload.index) ? false : v
                    )
                );    
        case SELECT_OCTAVE:
            return sound
                .set("currentOctave", payload.index);
        case INCREMENT_OCTAVE:
            return sound
                .set("currentOctave", payload.index > 4 ? 0 : payload.index + 1);
        case DECREMENT_OCTAVE:
            return sound
                .set("currentOctave", payload.index < 0 ? 4 : payload.index - 1);
        default:
            return sound;
    }
}
