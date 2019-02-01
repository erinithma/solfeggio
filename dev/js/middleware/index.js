import a from '../const'
import {fill} from '../common';

let resultTimeout = null;

export default (store) => (next) => (action) => {
    const { type, payload, ...rest } = action;
    const sound = store.getState().sound;

    switch(type){
        case a.LOAD_SOUND:
            if(sound.get("state") === "empty"){
                next(action);

                sound
                    .get("mode")
                    .loadAll(payload.urls)
                    .addListener(
                        "loaded", 
                        () => next({ ...rest, payload, type: type + a.READY })
                    )
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
            next({type: a.MODE_HIDE_TOTAL});

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
            next({type: a.MODE_HIDE_TOTAL});

            sound
                .get("mode")
                .play(payload.value);

            if(resultTimeout !== null){
                clearTimeout(resultTimeout);
                resultTimeout = null;
            } 

            next({type: a.MODE_HIDE_RESULT});

            break;

        case a.SET_MODE:
            next(action);
            next({ type: a.MODE_COUNT, payload: {count: 0} })

            store.getState().sound
                .get("mode")
                .addListener(
                    "counter", 
                    (count) => {
                        next({ type: a.MODE_COUNT, payload: {count} })
                    }
                )
                .addListener(
                    "finish", 
                    (result) => {
                        setTimeout( () => {
                            next({ type: a.MODE_COUNT, payload: {count: 0} });
                            next({ type: a.MODE_SHOW_TOTAL, payload: {result} }) 
                        },
                        300);                        
                    }
                );
            break;

        default:
            return next(action)        
  }
 
}
