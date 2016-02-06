/**
 * Created by wonwoo on 2016. 2. 6..
 */
"use strict"

let foo = {
    [Symbol.iterator]: () => {
        return {
            items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
            next() {
                return {
                    done: this.items.length === 0,
                    value: this.items.shift()
                }
            }
        }
    }
}

console.log([...foo]);
console.log(Array.from(foo))

let fibonacci = {
    [Symbol.iterator]: () => {
        let pre = 0, cur = 1;
        return {
            next() {
                pre = cur;
                cur = pre + cur;
                return { done: cur > 10000, value: cur }
            }
        }
    }
}

console.log([...fibonacci]);

for (var n of fibonacci) {
    console.log(n);
}

//for (let pony of foo) {
//    console.log(pony)
//}

//var tems= ['p', 'o', 'n', 'y', 'f', 'o', 'o'];
//for (let pony of tems) {
//    console.log(pony)
//}
