import sum from "./sum.js";
import * as demoobj from "./sum.js";
import {demo} from "./sum.js"
console.log(sum(4));
console.log(demoobj);
console.log(demo);

//import * as demoobj => tra ve 1 object [default, sum, ...]
//import {demo} => detructoring object demo
//import sum => ben ex phai co 1 default va goi dung ten sum