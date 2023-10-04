const time = ((time) => {
  const year = time.getFullYear().toString().slice(-2);
  const month = (time.getMonth() + 1).toString().padStart(2, '0');
  const day = time.getDate().toString().padStart(2, '0');
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;
})(new Date())

time.a = 5;

console.log(time);
