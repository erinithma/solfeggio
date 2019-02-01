import { Record } from 'immutable';
import { getSize } from '../common';
import PlayMode from '../modes/play';
import {fill} from '../common';
import a from '../const';

const Sound = Record({
    mode: new PlayMode(),
    result: null,
    state: 'empty',
    pressedKeys: fill(),
    currentOctave: 2,
    lastTouchIndex: -1,
    size: getSize(),
    counter: 0
});

export default (sound = new Sound(), action) => {
    const {type, payload} = action;
    const currentOctave = sound.get("currentOctave");

    switch(type){
        case a.LOAD_SOUND:
            return sound.set("state", "loading");

        case a.LOAD_SOUND + a.READY:
            return sound.set("state", "loaded"); 

        case a.KEY_DOWN:
            if(payload.fromMouse){
                sound = sound.set("lastTouchIndex", payload.index);
            }
            return sound
                .update('pressedKeys', (pressedKeys) => 
                    pressedKeys.map( (v, i) => 
                        (i === payload.index) ? true : v
                    )
                );    

        case a.KEY_UP:
            return sound
                .update('pressedKeys', (pressedKeys) => 
                    pressedKeys.map( (v, i) => 
                        (i === payload.index) ? false : v
                    )
                );   

        case a.SELECT_OCTAVE:
            return sound.set("currentOctave", payload.index);

        case a.INCREMENT_OCTAVE:
            return sound.set("currentOctave", currentOctave >= 4 ? 0 : currentOctave + 1);

        case a.DECREMENT_OCTAVE:
            return sound.set("currentOctave", currentOctave <= 0 ? 4 : currentOctave - 1);

        case a.SET_SIZE:
            return sound.get("size") !== payload.size ? sound.set("size", payload.size) : sound;

        case a.SET_MODE:
            return sound
                .set("mode", payload.mode);

        case a.MODE_SHOW_RESULT:
            return sound.set("result", sound.get("mode").getResult());
        
        case a.MODE_HIDE_RESULT:
            return sound.set("result", null);

        case a.MODE_COUNT:
            return sound.set("counter", payload.count);

        default:
            return sound;
    }
}
