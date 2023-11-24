const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }
info.favoriteFood = '🍝' //gan lai gia tri moi cho tt favorite => ko còn tham chiếu tới food nữa
console.log(food) // nen mang food ko doi
//=> A
