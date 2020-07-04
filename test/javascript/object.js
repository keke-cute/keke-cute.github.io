let user = {
    name : "keke",
    age : 18,
    "a1 a2" : true,
};
//console.log( user.name, user.age );
//
//user.isAdmin = true;
//delete user.age;
//
//console.log( user.isAdmin );
//console.log( user.age );
//console.log( user["a1 a2"]);
//delete user["a1 a2"];
//
//let key = prompt('你想知道哪个信息？🐶', 'name');
//alert( key + ' is ' + user[key] );//不要user.key!
//
//let fruit = prompt("有几个🍎？");
//
//let bag = {
//    apple : [fruit],
//};
//alert( '🍎有' + bag.apple + '个' );
//
//function makeUser(name, age) {
//    return {
//	name,//等同于name: name,
//	age,
//    };
//}
//
//let user2 = makeUser("keaido", 16);
//alert(user2.name);
//
////属性名（key）必须是字符串或 Symbol（标识符的一种特殊类型，稍后将介绍）。其它类型将被自动地转化为字符串。
////保留字段可以被用作属性名。if,for,let
////我们可以将任意字符串作为属性键（key），只有一个特殊的：__proto__ 因为历史原因要特别对待。
//
//let nosuch = {
//    name : 'xxx',
//};
//alert( nosuch.xxx === undefined );
//alert( "name" in nosuch );
////请注意，in 的左边必须是 属性名。通常是一个带引号的字符串。
//let key = 'name';
//alert( key in nosuch );
//
//for (let key in user) {
//    alert(key);
//    alert(user[key]);
//}
////对象“有特别的顺序”：整数属性会被进行排序，其他属性则按照创建的顺序显示。
//// 非整数属性是按照创建的顺序来排列的，可以给整数前加上+号就可以避开排序 +12
//
//let admin = user;
//admin.name = 'keaido';
////现在我们有了两个变量，但是都指向同一个对象
//alert(user.name);
//
////两个对象只有在它们其实是一个对象时才会相等。
////一个被 const 修饰的对象是 可以 被修改。
//
//let clone = {};
//for (let key in user) {
//    clone[key] = user[key];
//}
//for (let key in clone) {
//    alert(key + clone[key]);
//}
//

let p1 = {testp1: true};
let p2 = {testp2: true};

Object.assign(user, p1, p2);
Object.assign(user, {name: "aiduodo"});

for (let key in user) {
    console.log(key + user[key]);
}
//如果用于接收的对象（user）已经有了同样属性名的属性，已有的则会被覆盖：

let clone = Object.assign({}, user);
console.log(clone);
//方便的循环赋值
