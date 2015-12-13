var NewSafeConstructor = function(param){
    if (this instanceof NewSafeConstructor){
        this.param = param;
    } else {
        return new NewSafeConstructor(param);
    }
};



var objFromNew = new NewSafeConstructor("with New");
console.log(objFromNew);

var objWithoutNew = NewSafeConstructor("without New");
console.log(objWithoutNew);

