const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
	myPromise.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log("Timeout!1", 0));
	console.log("Last line!1");
}

async function funcTwo() {
	const res = await myPromise + "OK";
	console.log(await res + "OK");
	setTimeout(() => console.log("Timeout!2", 0));
	console.log("Last line!2");
}

funcOne();
funcTwo();


//Last Line
//Promise 
