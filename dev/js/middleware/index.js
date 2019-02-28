import a from '../const'
import {fill, getSize, timeout} from '../common';

let resultTimeout = null, offsetTimeout = null;

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
                    .addListener(
                        "progress", 
                        (percents, count) => next({ ...rest, payload: {percents, count}, type: a.PROGRESS })
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

            timeout(resultTimeout);
            timeout(offsetTimeout); 

            next({type: a.MODE_SHOW_RESULT});

            resultTimeout = timeout(2500, () => {
                next({type: a.MODE_HIDE_RESULT});
            });

            break;

        case a.MODE_PLAY:
            next({type: a.MODE_HIDE_TOTAL});

            sound
                .get("mode")
                .play(payload.value);

            timeout(resultTimeout);
            timeout(offsetTimeout);

            next({type: a.MODE_HIDE_RESULT});

            break;

        case a.SET_MODE:
            next(action);
            next({ type: a.MODE_COUNT, payload: {count: 0} });
            next({ type: a.CLEAR_SCROLL });

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
                            next({ type: a.MODE_SHOW_TOTAL, payload: {result} });
                        },
                        300);                        
                    }
                )
                .addListener(
                    "offset", 
                    (value) => {
                        next({ type: a.SCROLL_TEMP, payload: {value} });  
                        timeout(offsetTimeout);
                        offsetTimeout = timeout(2500, () => {
                            next({ type: a.CLEAR_SCROLL });  
                        });
                    }
                );
            break;
        
        case a.SET_SIZE:
            next({ type: a.CLEAR_SCROLL });
            next(action);
            break;

        default:
            return next(action)        
  }
 
}
