import { READY, LOAD_SOUND, KEY_DOWN, KEY_UP, MODE_PLAY, MODE_SELECT, MODE_UPDATE } from '../const'
import {fill} from '../common/helpers';

let resultTimeout = null;

export default (store) => (next) => (action) => {
    const { type, payload, ...rest } = action;
    const sound = store.getState().sound;

    switch(type){
        case LOAD_SOUND:
            if(sound.get("state") === "empty"){
                sound
                    .get("mode")
                    .loadAll(payload.urls)
                    .addListener(
                        "loaded", 
                        () => next({ ...rest, payload, type: type + READY })
                    )
            }
            else{
                next(action);
            }            
            break;

        case KEY_DOWN:
            sound
                .get("mode")
                .keyDown(payload.index)

            next(action);            
            break;

        case KEY_UP:
            sound
                .get("mode")
                .keyUp(payload.index);

            next(action);
            break;

        case MODE_SELECT:
            sound
                .get("mode")
                .select(payload.select);

            if(resultTimeout !== null){
                clearTimeout(resultTimeout);
                resultTimeout = null;
            }                

            next({type: MODE_UPDATE});

            resultTimeout = setTimeout(() => {
                next({type: MODE_UPDATE, payload: {show: false}});
            }, 2500);

            break;

        case MODE_PLAY:
            sound
                .get("mode")
                .play(payload.value);

            if(resultTimeout !== null){
                clearTimeout(resultTimeout);
                resultTimeout = null;
            } 

            next({type: MODE_UPDATE});

            break;

        default:
            return next(action)        
  }
 
}
