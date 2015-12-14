var module = (function(){
    var privateVar = 'private';

    var getPrivateVar = function(){
        return privateVar;
    };

    var decorate = function(){
        return "*** " + privateVar + " ***";
    };

    return {
        getPrivateVar: getPrivateVar,
        decorate: decorate
    };
})();



console.log(module);
console.log(module.privateVar);
console.log(module.getPrivateVar());
console.log(module.decorate());
