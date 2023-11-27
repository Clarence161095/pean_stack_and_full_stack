const myPromise = Promise.resolve("Woah some cool data");
(async () => {
	try {
		console.log(await myPromise); //ko loi run
	} catch {
		throw new Error(`Oops didn't work`);
	} finally {
		console.log("Oh finally!"); //luon chay
	}
})();
// => C
