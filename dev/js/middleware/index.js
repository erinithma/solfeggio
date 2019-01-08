import { READY, LOAD_SOUND, KEY_DOWN, KEY_UP } from '../const'

export default (store) => (next) => (action) => {
    const { type, payload, ...rest } = action;

    switch(type){
        case LOAD_SOUND:
            if(store.getState().sound.get("state") === "empty"){
                store
                    .getState()
                    .sound
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
            store
                .getState()
                .sound
                .get("mode")
                .keyDown(payload.index)

            next(action);
            
            break;
        case KEY_UP:
            store
                .getState()
                .sound
                .get("mode")
                .keyUp(payload.index);

            next(action);

            break;

        default:
            return next(action)        
  }
 
}
