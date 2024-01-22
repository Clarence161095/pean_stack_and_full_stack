import useFacade from "./+state/facade";

export default function Graph() {
  const { list, isLoading, addData, errorMessage } = useFacade();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.graphInput.value) return alert('Please enter graph name');
    addData(event.target.graphInput.value);
  }

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>
  } else if (errorMessage) {
    content = <div className="text-red-500">{errorMessage}</div>
  } else if (list) {
    content = <div>{
      list.map((graph) => {
        return (
          <div key={graph.id}>
            <div>{graph.title}</div>
          </div>
        )
      })
    }</div>
  }

  return (
    <div className="p-4">
      <h1>Graph</h1>
      <form className='mt-5 p-2 border border-solid border-1' onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="graphInput" className='mr-2'>Graph Name:</label>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="graphInput" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Submit
        </button>
      </form>
      {content}
    </div>
  )
}
