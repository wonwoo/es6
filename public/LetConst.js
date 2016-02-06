/**
 * Created by wonwoo on 2016. 2. 6..
 */
"use strict"


var OldVar = function(){
    var a = "var";
    {
        var a = "block var";
        console.log(a);
    }
    console.log(a);
};

OldVar();

var Let = function(){
    let a = "let";
    {
        let a = "block let";
        console.log(a);
    }
    console.log(a);
};
Let();

const Const = "const variable";
//Conts = "123"; // error
console.log(Const);

//appendix
//static

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static incrementAge(age){
        return age + 1;
    }
}

var wonwoo = new Person("wonwoo", 29);
console.log(wonwoo);

console.log(Person.incrementAge(29));

