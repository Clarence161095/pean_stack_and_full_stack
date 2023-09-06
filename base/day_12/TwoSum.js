const arr = [2, 7, 11, 15, 19];
let forCount = 0;
const demo = TinhWithHashMap(arr, 9);
console.log(demo, forCount);

function TinhWithHashMap(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    forCount++;
    const expectNumberKey = target - arr[i];

    if (map[expectNumberKey]) {
      forCount++;
      return [expectNumberKey, arr[i]]
    }

    map[arr[i]] = 'Checked';
  }

  return []
}

function TinhWithFor(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    forCount++;
    const element1 = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      forCount++;
      const element2 = arr[j]
      if (element1 + element2 === target) {
        return [element1, element2]
      }
    }
  }
  return []
}

function TinhWithNotFor(arr, target) {
  if (arr[0] + arr[1] === target) {
    return [arr[0], arr[1]]
  }

  if (arr[0] + arr[2] === target) {
    return [arr[0], arr[2]]
  }

  if (arr[0] + arr[3] === target) {
    return [arr[0], arr[3]]
  }

  if (arr[1] + arr[2] === target) {
    return [arr[1], arr[2]]
  }

  if (arr[1] + arr[3] === target) {
    return [arr[1], arr[3]]
  }

  if (arr[2] + arr[3] === target) {
    return [arr[1], arr[3]]
  }
  // TODO
  return []
}
