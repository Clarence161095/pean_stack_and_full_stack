const dbPostgres = [
  { id: 123, name: 'tuan' },
  { id: 234, name: 'linh' }
];

const waitXSecond = async (x) => await new Promise(resolve => setTimeout(resolve, x * 1000));

async function callAsynchronousQueryDB(id) {
  const result = dbPostgres.find(item => item.id === id);
  await waitXSecond(3); // 3s
  return result;
}

async function callAsynchronousQueryDBUpdate(id, name) {
  const result = dbPostgres.find(item => item.id === id);
  result.name = name;
  await waitXSecond(3); // 3s
  return result;
}

//-------
const appCache = {
  akhsvdkjabsdlasldkanlsdkanbhaksdfbkas: { info: 'token1' },
  'SELECT * FROM HOC_PHAN WHERE NAM_HOC = 1': [1, 2, 3],
  'getSinhVien/1995': { name: 'tuan' }
};

const token = 'SELECT * FROM HOC_PHAN WHERE NAM_HOC = 1'
const api123 = 'getSinhVien/1995'
const token2 = 'akhsvdkjsadasdasdasdabsdlasldkanlsdkanbhaksdfbkas'
appCache[token] && console.log(appCache[token]);
appCache[token2] && console.log(appCache[token2]);
if (appCache[token2]) {
  console.log(appCache[token2]);
} else {
  // Gọi tới service của google kiểm tra xem token đó có ok ko
  // ...
  appCache[token2] = { info: token2 }
}
appCache[token] && console.log(appCache[token]);
appCache[token] && console.log(appCache[token]);
appCache[token] && console.log(appCache[token]);
appCache[token] && console.log(appCache[token]);
appCache[token] && console.log(appCache[token]);
appCache[token] && console.log(appCache[token]);
appCache[token] && console.log(appCache[token]);
appCache[token] && console.log(appCache[token]);
appCache['getSinhVien/1995'] && console.log(appCache['getSinhVien/1995']);
appCache[token2] && console.log(appCache[token2]);

(async () => {

  async function getPosition(id) {
    if (!appCache[id]) {
      appCache[id] = await callAsynchronousQueryDB(id)
    }
    return appCache[id]
  }

  async function updatePosition(id, name) {
    appCache[id] = await callAsynchronousQueryDBUpdate(id, name)
    return appCache[id]
  }

  updatePosition.tuan = 'NGUYEN ANH TUAN';
  console.log(updatePosition.tuan);

  const array = {
    0: 1,
    1: 2
  }
  const arrayA = [1,2]

  console.log(array[0]);
  console.log(arrayA[0]);

  // Call API
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
  // console.log(await updatePosition(123, "XXXX"));
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
  // console.log(await getPosition(123));
})()