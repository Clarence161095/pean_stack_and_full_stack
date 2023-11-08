const myPromise = () => Promise.resolve('resolve Promise')

function first() {
  const callBackFirst = data => console.log(data + ' first');
  myPromise().then(callBackFirst);
  console.log('first');
}

async function second() {
  console.log(await myPromise() + ' second');
  console.log('second');
}

first()
second()