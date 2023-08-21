//Hàm thuần

function Tong1(a,b){
    return a + b;
}

const demo1 = Tong1(4,5);
console.log(demo1); //9

//Hàm không thuần

function Tong2(a){
    a++
    return a;
}

const demo2 = Tong2(5);
console.log(demo2); 