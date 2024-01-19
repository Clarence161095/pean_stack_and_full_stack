import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, get } from './+state/effect';
import { selectData, selectError, selectLoading } from './+state/selector';

let isInitial = true;

export default function Graph() {
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(get());
    }
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.graphInput.value) return alert('Please enter graph name');
    dispatch(create({ title: event.target.graphInput.value }));
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

      {isLoading && <div>Loading...</div>}

      {errorMessage && <div>{errorMessage}</div>}

      {data && !isLoading && <div>{
        data.map((graph) => {
          return (
            <div key={graph.id}>
              <div>{graph.title}</div>
            </div>
          )
        })
      }</div>}
    </div>
  )
}
