import Mode from './mode';
import {random, map} from '../common';

export default class MinDurMode extends Mode{
    constructor(){
        super();
        this.generate();
    }

    generate() {
        const first = random(0, 59 - 7);

        if(random(0, 999) % 2){
            this.accord = [first, first + 3, first + 7];
            this.type = "minor";
        }
        else{
            this.accord = [first, first + 4, first + 7];            
            this.type = "major";
        }
    }

    play(){
        if(this.next){
            this.generate();
            this.next = false;
            this.result = null;
        }

        Mode.sound.play(this.accord);
    }

    select(type){
        this.next = true;

        if(type === this.type)
            return this.result = true;
        else
            return this.result = false;
    }
    
    getColor(index){
        if(this.result === null){
            return null;
        }
        else if(this.accord.includes(index)){
            return this.result ? "green" : "red";
        }
    }

    getResult(){
        return {
            success: this.result,
            colors: map( i => this.getColor(i) )
        }
    }

    type = "minor";
    accord = [];
    next = false;
    result = null;

}