let animals = [
    { name: 'keke',  species: 'kedidual' },
    { name: 'k' ,    species: 'keaidual' },
    { name: 'keaid', species: 'duo' },
]

let dual = animals.filter(function(animal) {
    return animal.species === 'keaidual'
})

let keai = []

for (let i = 0; i < animals.length; i++) {
    if(animals[i].species === 'duo')
	keai.push(animals[i])
}

console.log(dual)
console.log(keai)

let names = animals.map((xx) => xx.name )
console.log(names)




let xxxs = [
    { item: 111 },
    { item: 111 },
    { item: 111 },
    { item: 111 },
    { item: 111 },
    { item: 111 },
    { item: 111 },
]

let total = xxxs.reduce((sum, xxxs) => sum + xxxs.item, 0)
console.log(total)
