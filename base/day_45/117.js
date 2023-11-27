function sumValues(x, y, z) {
	return x + y + z;
}
const demo = sumValues(...[1,2,3]); // rest para -> copy gia tri trong array -> C
console.log(demo);
