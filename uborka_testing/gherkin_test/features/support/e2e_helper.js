let page;
let browser;

let getPage = function (){
    return page;
}
let setPage = function (p){
    page = p;
}

let getBrowser = function(){
    return browser;
}
let setBrowser =function(b){
    browser = b;
}

exports.getPage = getPage;
exports.setPage = setPage;

exports.setBrowser = setBrowser;
exports.getBrowser = getBrowser;