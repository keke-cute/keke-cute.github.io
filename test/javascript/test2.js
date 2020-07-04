const t = [1, -1, 3]

t.push(5);//原数组

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5, 6);//添加到新数组，react建议
console.log(t2);

const m1 = t.map(value => '<li>' + value + '</li>')
console.log(m1)

const [diyi, dier, disan, disi, diwu] = t

console.log(diyi)

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result = sum(1, 5)
console.log(result)

const arto = {
    name: 'keke',
    age:17,
    greet: function() {
	console.log('hello,my name is' + this.name)
    },
    doAdd: function(a, b) {
	console.log(a + b)
    },
}
setTimeout(arto.greet.bind(arto), 1000)//将this绑定到了arto
arto.doAdd(1, 4)
const toAdd = arto.doAdd
arto.doAdd(10, 15)
arto.greet()

arto.addAge = function() {
    this.age += 1
}

console.log(arto.age)
arto.addAge()
console.log(arto.age)

const reGreet = arto.greet
reGreet()

class Person {
    constructor(name, age) {
	this.name = name
	this.age = age
    }
    greet() {
	console.log('hello,my name is' + this.name)
    }
}

const keke = new Person('keaido', 16)
keke.greet()

const dokeai = new Person('dokeai', 19)
dokeai.greet()
