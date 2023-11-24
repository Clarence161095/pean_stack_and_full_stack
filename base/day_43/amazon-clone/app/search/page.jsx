/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
const db = [
  "Nguyễn Anh Tuấn",
  "Phạm Tuấn Linh",
  "Trần Thị Hương",
  "Lê Thị Mai",
  "Hoàng Thị Lan",
  "Vũ Thị Thu",
  "Ngô Thị Huệ",
  "Đặng Thị Hà",
  "Phan Thị Ngọc",
  "Nguyễn Thị Thảo",
  "Bùi Thị Quỳnh",
  "Nguyễn Thị Kim",
  "Lý Thị Hạnh",
  "Trần Thị Thúy",
  "Vương Thị Thanh",
  "Hoàng Thị Thủy",
  "Mai Thị Hoa",
  "Phạm Thị Hồng",
  "Lê Thị Nga",
  "Nguyễn Thị Hằng",
  "Ngô Thị Thanh",
  "Đỗ Thị Hương",
  "Trương Thị Lan",
  "Võ Thị Hải",
  "Lê Thị Thu",
  "Phan Thị Thùy",
  "Nguyễn Thị Loan",
  "Hoàng Thị Hà",
  "Trần Thị Ngọc",
  "Lý Thị Thảo",
  "Ngô Thị Hồng",
  "Vũ Thị Mai",
  "Phạm Thị Thu",
  "Bùi Thị Lan",
  "Trịnh Thị Thanh",
  "Nguyễn Thị Nguyệt",
  "Đặng Thị Thu",
  "Lê Thị Hồng",
  "Hoàng Thị Thảo",
  "Mai Thị Thúy",
  "Vương Thị Mai",
  "Lý Thị Hà",
  "Trần Thị Kim",
  "Nguyễn Thị Hòa",
  "Phan Thị Hằng",
  "Đỗ Thị Lan",
  "Võ Thị Thủy",
  "Nguyễn Thị Huyền",
  "Lê Thị Hoài",
  "Hoàng Thị Thanh",
  "Trần Thị Thu",
  "Mai Thị Lan",
  "Phạm Thị Trang"
];

function searchName(textSearch) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("SELECT * FROM NAME_TABLE WHERE NAME LIKE %'", textSearch);
      const result = db.filter((name) => {
        if(name.includes(textSearch)) {
           return name
        }
      })
      resolve(result)
    }, 500);
  })
}

export default function page() {
  const [listName, setListName] = React.useState(db);
  const [nmCount, setNmCount] = React.useState(0);
  const [count, setCount] = React.useState(0);
  let debounceTimeout;

  function search(e) {
    setNmCount(nmCount + 1)
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      setCount(count + 1);
      searchName(e.target.value).then((result) => {
        setListName(result)
      })
    }, 600);
  }

  return (
    <div>
      Times search (call DB): {nmCount}<br/>
      Times search (debounce call DB): {count}<br/>
      <input type="text" className="bg-blue-50" onChange={search}/>
      <ul>
        {listName.map(name => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}
