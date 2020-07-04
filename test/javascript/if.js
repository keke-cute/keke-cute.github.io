let year = prompt('请输入你的出生年份❓','');
let age = 2020 - year;
alert(`You age is ${age}.`);

if (year <= 2002) {
    alert('你已经成年🧑');
} else {
    alert('你还未成年👶');
}

let agetest = (age > 18) ? true : false;//计算条件结果，如果结果为真，则返回 左边的true，反之

let message = (age < 3) ? '👶' :
    (age < 18) ? '👦' :
    (age < 100) ? '👴':
    'fuck';
alert(message);

(age === 18) ?
    alert('18') : alert ('no 18');
