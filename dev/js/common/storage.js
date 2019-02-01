const NAME = "so_storage";

function init(){
    if(!localStorage.getItem(NAME))
        localStorage.setItem(NAME, JSON.stringify({
            common: {},
            modes: {}
        }));
}

function get(mode = null){
    init();

    const json = localStorage.getItem(NAME);
    
    if(mode === null) {
        return json.common;
    }
    else if(typeof mode === "string"){
        return json.modes[mode];
    }
    throw "invalid argument 'mode'";
}

function set(data, mode = null) {
    init();

    let allData = JSON.parse(localStorage.getItem(NAME))

    if(mode === null) {
        let json = get();
        json = Object.assign(json, data);
        allData.common = json;

        localStorage.setItem(NAME, JSON.stringify(allData));
    }
    else if(typeof mode === "string"){
        let json = get(mode) || {};
        json = Object.assign(json, data);
        allData.modes[mode] = json;

        localStorage.setItem(NAME, JSON.stringify(allData));
    }
    throw "invalid argument 'mode'";
}

export default {
    get,
    set
};