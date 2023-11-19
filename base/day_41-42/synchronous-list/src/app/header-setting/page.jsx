'use client'

import { useEffect, useState } from "react";

export default function HeaderSetting(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3001/e_headers");
      const data = await response.json();
      setData(data);
    }
    fetchUsers();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      Header Setting
      {data?.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
}
