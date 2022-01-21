function Myfun(){
    var b = 5;
    function inner(){
        return b;
    }
    return inner;
}
var Myfun1 =Myfun();
console.log(Myfun1());
console.log(Myfun1());
