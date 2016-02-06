/**
 * Created by wonwoo on 2016. 2. 6..
 */

var numbers = [1, 2, 3, 4, 5, 6, 7];

console.log("==================================== map ====================================");
var odds = numbers.map(function (value) {
    return value * 2;
});
console.log(odds);

var news = numbers.map(x => x * 2);
console.log(news);

console.log("==================================== foreach ====================================");

//forEach
var obj = [{"name": "wonwoo", "age": 29}, {"name": "Jui", "age": 10}];
obj.forEach(x => console.log(x));

console.log("==================================== filter ====================================");
//filter
obj.filter(o => o.age > 20).forEach(o => console.log(o));

console.log("find ====================================");
var find = obj.find(x => x.age > 20);
console.log(find);

var findNumber = [6, -5, 8].find(x => x < 0);
console.log(findNumber);

console.log("==================================== from ====================================");

var from = Array.from([1, 2, 3, 4, 5]);
console.log(from);

var arrayFrom = Array.from(new Array(5), () => 'a');
console.log(arrayFrom);

var iArray = Array.from(new Array(5), (x, i) => i);
console.log(iArray);

console.log("==================================== of ====================================");

Array.of([1, 2, 3, 4, 5, 6, 7, 8]).forEach(i => console.log(i));
Array.of(1, 2, 3, 4, 5, 6, 7, 8).forEach(i => console.log(i));

console.log("============================d======== fill ====================================");
var fill = numbers.fill(2, 0, 4);
console.log(fill);

var fill1 = numbers.fill(2);
console.log(fill1);
