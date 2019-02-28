import SoundContext from './sound-context';
import SoundTrack from './sound-track';

export default class Sound {
    constructor() {  
        this.context = SoundContext.getContext();
        this.buffer = {};
        this.sounds = {};
        this.events = {
            loaded: null,
            progress: null
        }
        this.loaded = 0;
    }

    addListener(event, fnc){
        if(event in this.events)
            this.events[event] = fnc;

        return this;
    }

    fire(event, ...args){
        if(this.events[event])
            this.events[event](...args); 

        return this;
    }
    
    loadSound(url, index, len) {
        let request = new XMLHttpRequest();
        request.open('get', url, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            this.context
                .decodeAudioData(request.response, (buffer) => {

                    this.loaded++;

                    this.buffer[index] = buffer;

                    this.fire("progress", Math.floor(this.loaded / len * 100), this.loaded);

                    if(this.loaded === len) {
                        this.fire("loaded");
                    }       
                });
        };
        request.send();
    };
    
    loadAll(urls) {
        urls.forEach((url, index) => {
            this.loadSound(url, index, urls.length);
        });

        return this;
    }
    
    get(index, mem = false) {
        if(mem){
            return this.sounds[index];
        }
        this.sounds[index] = new SoundTrack(this.context, this.buffer[index]);
        return this.sounds[index];
    }

    play(indexes, time = 0){
        if(time < 0){
            indexes.slice().reverse().forEach( (val, index) => {
                this.get(val).play(index * (-time), 2)
            })
        }
        else{
            indexes.forEach( (val, index) => {
                this.get(val).play(index * time, 2)
            })
        }
        
        return this;
    }

}