var mixin = function(receiver, supplier){
    var keys = Object.getOwnPropertyNames(supplier),
        descriptor;

    if (Object.getOwnPropertyDescriptor){
        keys.forEach(function(k){
            if (typeof supplier[k] === 'function'){
                descriptor = Object.getOwnPropertyDescriptor(supplier, k);
                Object.defineProperty(receiver, k, descriptor);
            }
        });
    } else {
        keys.forEach(function(k){
            if (typeof supplier[k] === 'function'){
                receiver[k] = supplier[k];
            }
        });
    }

    return receiver;
};



var Receiver = function(name){
    this.name = name;
};
Receiver.prototype.showName = function(){
    console.log(this.name);
};



var Supplier = function(name){
    this.name = name;
    this.decoName = function() {
        console.log("*** " + this.name + " ***");
    };
};
// prototype에 있는 메서드는 mixin 에 포함되지 않는다.
// 위의 this.decoName을 지우고 아래처럼 prototype에 decoName을 정의하면
// Receiver에서 decoName을 사용할 수 없다.
//Supplier.prototype.decoName = function(){
//    console.log("*** " + this.name + " ***");
//};



(function(){
    var receiver = new Receiver("Receiver");
    var supplier = new Supplier("Supplier");

    mixin(receiver, supplier);

    receiver.showName();
    receiver.decoName();
})();