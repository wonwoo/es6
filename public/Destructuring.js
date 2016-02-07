/**
 * Created by wonwoo on 2016. 2. 7..
 *
 * firefox developer
 */

var numbers = Array.from([1, 2, 3, 4, 5]);

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

var [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);


var [foo,[bar]] = [1, [2]];
console.log(foo);
console.log(bar);

var [,,third] = [5, 6, 7];
console.log(third);


var [first, ...tail] = [10, 11, 12, 13, 14];
console.log(first);
console.log(tail);

function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);


var wonwooA = {name : "wonwooA"};
var wonwooB = {name : "wonwooB"};

var {name : wonwoo1} = wonwooA;
var {name : wonwoo2} = wonwooB;
console.log(wonwoo1);
console.log(wonwoo2);

var {name, age} = {name : "wonwooC" ,age : 29};

console.log(name);
console.log(age);

function returnMultipleValues(k) {
    k(1, 2);
}

returnMultipleValues((foo, bar) => console.log("foo : " + foo + " bar : "+ bar));
