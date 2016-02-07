/**
 * Created by wonwoo on 2016. 2. 7..
 */
"use strict"
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20


function* quips(name) {
    yield "hello " + name + "!";
    yield "i hope you are enjoying the blog posts";
    if (name.startsWith("X")) {
        yield "it's cool how your name starts with X, " + name;
    }
    yield "see you later!";
}

var qu = quips("XO");

for(var q of qu){
    console.log(q);
}

console.log(qu.next().value);
console.log(qu.next().value);
console.log(qu.next().value);
console.log(qu.next().value);
console.log(qu.next().value);
