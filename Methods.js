// //Bind() 

var name1 = {firstname:'Degavath', lastname:'Mamatha'};
var name2 = {firstname:'Lakavath', lastname:'Chinni'};
function say(){
    console.log('Hello' + this.firstname + " " +this.lastname);
}
var person1 = say.bind(name1);
var person2 = say.bind(name2);
person1();
person2();

