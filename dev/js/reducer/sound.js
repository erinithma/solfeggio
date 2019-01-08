import { Record } from 'immutable';
import { getSize } from '../common/helpers';
import PlayMode from '../modes/play';
import {fill} from '../common/helpers';

import { 
    LOAD_SOUND, 
    READY, 
    KEY_DOWN,
    KEY_UP, 
    SELECT_OCTAVE, 
    INCREMENT_OCTAVE, 
    DECREMENT_OCTAVE,
    SET_SIZE,
    SET_MODE,
    MODE_SELECT,
    MODE_PLAY,
    MODE_SHOW_RESULT,
    MODE_HIDE_RESULT 
    } from '../const';

const Sound = Record({
    mode: new PlayMode(),
    result: null,
    state: 'empty',
    pressedKeys: fill(),
    currentOctave: 2,
    lastTouchIndex: -1,
    size: getSize()
});

export default (sound = new Sound(), action) => {
    const {type, payload} = action;
    const currentOctave = sound.get("currentOctave");

    switch(type){
        case LOAD_SOUND:
            return sound.set("state", "loading");

        case LOAD_SOUND + READY:
            return sound.set("state", "loaded"); 

        case KEY_DOWN:
            if(payload.fromMouse){
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
            return sound.set("currentOctave", payload.index);

        case INCREMENT_OCTAVE:
            return sound.set("currentOctave", currentOctave >= 4 ? 0 : currentOctave + 1);

        case DECREMENT_OCTAVE:
            return sound.set("currentOctave", currentOctave <= 0 ? 4 : currentOctave - 1);

        case SET_SIZE:
            return sound.get("size") !== payload.size ? sound.set("size", payload.size) : sound;

        case SET_MODE:
            return sound
                .set("mode", payload.mode)
                .set("showResults", true);

        case MODE_SHOW_RESULT:
            return sound.set("result", sound.get("mode").getResult());
        
        case MODE_HIDE_RESULT:
            return sound.set("result", null);

        default:
            return sound;
    }
}
