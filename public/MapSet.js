/**
 * Created by wonwoo on 2016. 2. 6..
 */

var s = new Set();
s.add(1).add(2).add(3).add(4);
console.log([...s]);

console.log(s.has(2)); //true
console.log(s.has(10)); //false

console.log(s.delete(3)); //true
console.log(s.delete(10)); //false
console.log([...s]); // [1,2,4]

s.add(1);
console.log([...s]); // [1,2,4]
console.log(s.size); // 3

var m = new Map();

m.set("Hello" ,"World");
console.log(m.get("Hello"));

m.set(s, "Test");
console.log(m.get(s));

console.log(m.has("Hello")); //true
console.log(m.has("World")); //false


var wm = new WeakMap();
wm.set(s, { name: "wonwoo" });
console.log(wm.get(s));
console.log(wm.get(s).name);
console.log(wm.size) //undefined;

var ws = new WeakSet();
ws.add({ name: "wonwoo" });
