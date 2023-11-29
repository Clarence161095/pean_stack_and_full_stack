const myFunc = ({ x, y, z }) => {
	console.log(x, y, z);
};
//myFunc dang duoc truyen 1 Object gom 3 tt x,y,z
//con ket qua log dang tra ve 3 tham so doc lap x, y ,z
//nen ket qua tra ve la undefined(do tham so dau vao ko cung kieu dl)
myFunc(1, 2, 3); 
myFunc({x: 1, y: 2, z: 3});// OK rest parameter
// D
