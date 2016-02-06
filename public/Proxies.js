/**
 * Created by wonwoo on 2016. 2. 6..
 */
"use strict"
var target = {};
var handler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    }
};
//
//var p = new Proxy(target, handler);
//p.world === 'Hello, world!';
//console.log(p.world);

