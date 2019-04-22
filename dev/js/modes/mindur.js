import Mode from './mode';
import {random, map, getSize} from '../common';
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
        this.fire("offset", this.getOffset());

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

    getOffset(){
        let index = this.accord[0];
        let value = null;

        let notes = [
            0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6,
            7, 7, 1 + 7, 1 + 7, 2 + 7, 3 + 7, 3 + 7, 4 + 7, 4 + 7, 5 + 7, 5 + 7, 6 + 7,
            14, 14, 1 + 14, 1 + 14, 2 + 14, 3 + 14, 3 + 14, 4 + 14, 4 + 14, 5 + 14, 5 + 14, 6 + 14,
            21, 21, 1 + 21, 1 + 21, 2 + 21, 3 + 21, 3 + 21, 4 + 21, 4 + 21, 5 + 21, 5 + 21, 6 + 21,
            28, 28, 1 + 28, 1 + 28, 2 + 28, 3 + 28, 3 + 28, 4 + 28, 4 + 28, 5 + 28, 5 + 28, 6 + 28]
            
        switch(getSize()){
            case 'sm':
                if(index >= 60 - 12 - 1)
                    value = -300 * 4;
                else
                    value = -(notes[this.accord[1]]) * 300 / 7 + 300 / 2;
                break;          
            case 'md':
                if(index >= 60 - 12 * 3 - 1)
                    value = -173 * 2;
                else
                    value = -(notes[this.accord[1]]) * 173 / 7 + 173 * 3 / 2;
                break; 
        }

        return value === null ? null : value >= 0 ? 0 : value;
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
        return this.counter;
    }

    clear() {
        this.next = false;
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