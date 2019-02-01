import { Record } from 'immutable';
import { getSize, fill } from '../common';
import PlayMode from '../modes/play';
import a from '../const';

const Sound = Record({
    mode: new PlayMode(),
    result: null,
    total: null,
    state: 'empty',
    pressedKeys: fill(),
    currentOctave: 2,
    lastTouchIndex: -1,
    size: getSize(),
    counter: 0,
    offset: getOffset(2),
    tempOffset: null
});

function getOffset(index) {
    switch(getSize()){
        case 'sm':
            return index * -300;            
        case 'md':
            return (index === 0 ? 0 : index - 1) * -173;
        default:
            return 0;
    }
}

function setOffset(sound, index) {
    return sound.set("offset", getOffset(index));            
}

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
            return setOffset(sound.set("currentOctave", payload.index), payload.index);

        case a.INCREMENT_OCTAVE:
            return (index => setOffset(sound.set("currentOctave", index), index))(currentOctave >= 4 ? 0 : currentOctave + 1);

        case a.DECREMENT_OCTAVE:
            return (index => setOffset(sound.set("currentOctave", index), index))(currentOctave <= 0 ? 4 : currentOctave - 1);

        case a.SET_SIZE:
            return sound.get("size") !== payload.size ? 
                setOffset(sound.set("size", payload.size), currentOctave)
                : 
                sound;

        case a.SET_MODE:
            return sound
                .set("mode", payload.mode)
                .set("total", null);

        case a.MODE_SHOW_RESULT:
            return sound.set("result", sound.get("mode").getResult());
        
        case a.MODE_HIDE_RESULT:
            return sound.set("result", null);

        case a.MODE_SHOW_TOTAL:
            return sound.set("total", payload.result);
        
        case a.MODE_HIDE_TOTAL:
            return sound.set("total", null);

        case a.MODE_COUNT:
            return sound.set("counter", payload.count);

        case a.SCROLL_TEMP:
            return sound.set("tempOffset", payload.value);

        case a.CLEAR_SCROLL:
            return sound.set("tempOffset", null);

        default:
            return sound;
    }
}
