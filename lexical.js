var OutFun = function(){
    if (true){
        var a =12;
        // console.log(b);
    }
    var NestedFun = function(){
        if (true){
            var b = 15;
            // console.log(a); //a will still be known prints 15
        }
        if (true){
            console.log(b);
        }
    }
    return NestedFun;
}
var MyFun = OutFun();
MyFun();