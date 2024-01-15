import useFacade from "./+store/facade";

export default function Announcement() {
  const { isLoading, list, loadData, error } = useFacade();

  return (
    <div className="w-full">
      <button onClick={loadData}>Load</button>
      {
        isLoading ?
          <div>Loading...</div> :
          <ul>
            {
              list && list.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))
            }
          </ul>
      }
      {error && <div>{error}</div>}
    </div>
  )
}
