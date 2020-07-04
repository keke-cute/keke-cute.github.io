////你好，对象
//let user = {};
//user.name = "John";
//user.surname = "Smith";
//user.name = "Pete";
//delete user.name;
//for(let key in user) {
//    console.log(key + user[key]);
//}

////检查空对象
//let schedule = {};
//
//let isEmpty = function(x) {
//    let test;
//    for (let key in x) {
//	test = x;
//    }
//    if (test === undefined) {
//	return true;
//    }else {
//	return false;
//    }
//}
//
//console.log(isEmpty(schedule));
//schedule["8:30"] = "get up";
//console.log(isEmpty(schedule));
////标准答案
//function isEmpty(obj) {
//  for (let key in obj) {
//    // 如果进到循环里面，说明有属性。
//    return false;
//  }
//  return true;
//}
//
////不可变对象
//const user = {
//    name: 'keke',
//};
//
//user.name = 'keai';
//console.log(user.name);
////对象属性求和
//let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
//};
//
//let sum = 0;
//for (let key in salaries) {
//  sum += salaries[key];
//}
//
//console.log(sum);
//
//数值属性都乘以 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let multiplyNumeric = function(x) {
    for(let key in x) {
	if(typeof(x[key]) == Number) {
	    x[key] *= 2;
	}
    }
}
multiplyNumeric(menu);
for (let key in menu) {
    console.log(menu[key]);
}
console.log(typeof(menu.height));
