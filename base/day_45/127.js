const spookyItems = ["👻", "🎃", "🕸"];
//TODO: phan tich destructoring nay 
({ item: spookyItems[3] } = { item: "💀" });
//Object Destructuring gan ptu thu 4 trong array =  "💀"
console.log(spookyItems);

//=> B 
