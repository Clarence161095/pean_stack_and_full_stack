function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']]) // null
getFruit()// undefined
getFruit([['🍍'], ['🍊', '🍌']])

//A