'use strict'
var num = 0 / 0;
num = NaN;
if (isNaN(num)) {
    console.log("NAN");
}
console.log(isNaN(NaN));
new Array(1,2,3);
var human = {
    name : 'keke',
    age : 11,
    tags : ['girl', 'pink'],
};
console.log(human.tags);
console.log('hello' + human.name);
console.log(`${human.name}`);
var s = 'keke';
console.log(s.length);
console.log(s[0]);
console.log(s.toUpperCase());
let me;
me = 'keke';
console.log(me);
const KEKE = 17;
num = String(num);
console.log(typeof num);
let apple = 10;
let oranges = 11;
console.log(+apple + +oranges);
let year = prompt('please','');
