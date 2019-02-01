import Mode from './mode';
import {random, map} from '../common';
import storage from '../common/storage';

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
        this.counter++;

        this.fire("counter", this.counter);

        if(type === this.type) {
            this.result = true;
            if(this.type === "minor") {
                this.minorSuccess++;
            }
            else {
                this.majorSuccess++;
            }
        }
        else {
            this.result = false;
            if(this.type === "minor") {
                this.minorFailure++;
            }
            else {
                this.majorFailure++;
            }
        }

        if(this.counter >= this.total) {
            this.fire("finish", this.getTotalResult());
            this.clear();
        }

        return this.result;
            
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

    getTotalResult(){
        return {
            total: Math.floor( (this.minorSuccess + this.majorSuccess) / this.total * 100 ),
            minor: Math.floor( this.minorSuccess / (this.minorSuccess + this.minorFailure) * 100 ),
            major: Math.floor( this.majorSuccess / (this.majorSuccess + this.majorFailure) * 100 ),
            totalSuccess: this.minorSuccess + this.majorSuccess,
            totalCount: this.total,
            minorSuccess: this.minorSuccess,
            majorSuccess: this.majorSuccess,
            minorCount: this.minorSuccess + this.minorFailure,
            majorCount: this.majorSuccess + this.majorFailure
        }
    }

    getCounter() {
        return counter;
    }

    clear() {
        this.next = false;
        this.result = null;
        this.counter = 0;
        this.minorSuccess = 0;
        this.majorSuccess = 0;
        this.minorFailure = 0;
        this.majorFailure = 0;
    }

    type = "minor";
    accord = [];
    next = false;
    result = null;
    counter = 0;
    minorSuccess = 0;
    majorSuccess = 0;
    minorFailure = 0;
    majorFailure = 0;
}