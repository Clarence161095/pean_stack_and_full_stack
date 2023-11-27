const add = x => y => z => {
    console.log(x, y, z);
    return x + y + z;
    };
    
    add(4)(5)(6);
    
    //doan code tren tuong duong voi anonymous function sau 
    //day chinh la currying
    
    const add2 = function(x) {
    return function(y) {
    return function(z) {
    console.log(x, y, z);
    return x + y + z;
    };
    };
    };
    
    add2(4)(5)(6) //4 5 6 -> A
    