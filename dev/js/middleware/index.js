import a from '../const'
import {fill} from '../common/helpers';

let resultTimeout = null;

export default (store) => (next) => (action) => {
    const { type, payload, ...rest } = action;
    const sound = store.getState().sound;

    switch(type){
        case a.LOAD_SOUND:
            if(sound.get("state") === "empty"){
                sound
                    .get("mode")
                    .loadAll(payload.urls)
                    .addListener(
                        "loaded", 
                        () => next({ ...rest, payload, type: type + a.READY })
                    )
            }
            else{
                next(action);
            }            
            break;

        case a.KEY_DOWN:
            sound
                .get("mode")
                .keyDown(payload.index)

            next(action);            
            break;

        case a.KEY_UP:
            sound
                .get("mode")
                .keyUp(payload.index);

            next(action);
            break;

        case a.MODE_SELECT:
            sound
                .get("mode")
                .select(payload.select);

            if(resultTimeout !== null){
                clearTimeout(resultTimeout);
                resultTimeout = null;
            }                

            next({type: a.MODE_SHOW_RESULT});

            resultTimeout = setTimeout(() => {
                next({type: a.MODE_HIDE_RESULT});
            }, 2500);

            break;

        case a.MODE_PLAY:
            sound
                .get("mode")
                .play(payload.value);

            if(resultTimeout !== null){
                clearTimeout(resultTimeout);
                resultTimeout = null;
            } 

            next({type: a.MODE_HIDE_RESULT});

            break;

        default:
            return next(action)        
  }
 
}
