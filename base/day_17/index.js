function getShape() {
  this.radius = 20;
  return {
    radius: 1000,
    diameter() {
      return this.radius;
    },
    perimeter: () => this.radius
  };
}

const shape1 = getShape()
const shape2 = getShape()
shape1.radius = 5;
// shape2.radius = 10;

console.log(shape1.diameter());
console.log(shape1.perimeter());
console.log(shape2.diameter());
console.log(shape2.perimeter());
