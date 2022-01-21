//Apply
var name1 = {firstname:'a' ,lastname:'b'};
var name2 = { firstname:'c', lastname:'d'};

function say(greeting){
    console.log(greeting+ ' '+this.firstname + ' '+this.lastname);
}
say.apply(name1,['Hello']);
say.apply(name2,['Hello']);
