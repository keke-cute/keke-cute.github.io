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
