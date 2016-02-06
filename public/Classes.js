/**
 * Created by wonwoo on 2016. 2. 6..
 */

"use strict"

var _name = Symbol('name');

class Animal {
    constructor(name, age) {
        this[_name] = name;
        this.age = age;
    }

    get getName() {
        return this[_name];
    }
    get getAge(){
        return this.age;
    }
    set setName(name){
        this.name = name;
    }

    move(){
        console.log("Animals can move");
    }

}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    move(){
        console.log("Dog can move");
    }
}

const dog = new Dog("dog111", 11);
dog.move();
console.log(dog.getName); //dog111
console.log(dog.getAge); //11
console.log(dog.name); //undefined
console.log(dog.age);  //11
console.log(dog.setName = "DOGNAME")
console.log(dog); //Dog { age: 11, name: 'DOGNAME' }