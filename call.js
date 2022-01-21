var PN1 = {firstN: "Degavath", lastN:"Rajitha"};
var PN2 = {firstN: " Degavath" ,lastN:"Thirupathi"};

function say(greeting){
    console.log(greeting + ' '+this.firstN + ' ' +this.lastN);
}
say.call(PN1, 'Hello');
say.call(PN2, 'Hello');