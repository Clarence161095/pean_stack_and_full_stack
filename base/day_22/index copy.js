const map = new Map();

(async () => {
  async function getData(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(query);
      }, 3000);
    });
  }

  async function getDataWithCache(query) {
    if (!map.get(query)) {
      map.set(query, getData(query))
    }
    return map.get(query)
  }

  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
  console.log(await getDataWithCache(''))
})();


