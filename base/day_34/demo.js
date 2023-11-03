function getItems(fruitList,favoriteFruit,...args) {
    return [...fruitList, ...favoriteFruit,...args]
  }
  
//rest paramters
//destructoring

  console.log(  getItems(["banana", "apple"], "pear", "orange"));