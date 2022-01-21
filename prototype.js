function Student() {
    this.name = 'Mamatha';
    this.gender = 'F';
}
Student.prototype.age = 22;

var studObj1 = new Student();
console.log((studObj1.age)); 