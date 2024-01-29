import { useEffect, useState } from "react"

export default function MyInfo() {
  const [list, setList] = useState([1,2,3])

  return (
    <div>
      <h1>My Info</h1>
      <List list={list} />
      <button onClick={() => setList([...list, list.length++])}>Add</button>
    </div>
  )
}

function List({ list }) {
  useEffect(() => {
    console.log('List useEffect')
  }, []);

  return (
    <ul>
      {list.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
