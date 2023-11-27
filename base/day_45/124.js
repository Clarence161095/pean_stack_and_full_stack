async function* range(start = 1, end = 3) {
	{
        yield Promise.resolve(i); 
        //=> console.log(1); 
    }
    {
        yield Promise.resolve(i);
        //=> console.log(2);
    }
    {
        yield Promise.resolve(i);
        //=>console.log(3);
    }
}

(async () => {
	const gen = range(1, 3);
	{
        console.log(1);
        console.log(2);
        console.log(3);
    }
})();

//=> 1 , 2 ,3 => C
