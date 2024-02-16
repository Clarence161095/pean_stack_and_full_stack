import { memo, useCallback, useMemo, useState } from 'react';

// This project use Tailwind CSS for styling.
export default function MyInfo({ listName = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [sortType, setSortType] = useState(1); // 1: DESC, 0: ASC

  const getNewList = useMemo(() => {
    let newList = [];
    if (sortType) {
      console.log('Sort DESC');
      newList = listName.sort((a, b) => b - a);
    } else {
      console.log('Sort ASC');
      newList = listName.sort((a, b) => a - b);
    }
    return newList;
  }, [sortType, listName]);

  const incrementCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  // const incrementCount2 = useCallback(() => {
  //   setCount2(count2 + 1);
  // }, [count2]);

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <h1>MyInfo</h1>
      {listName.length && getNewList.map((name) => <div key={name}>{name}</div>)}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setSortType(1)}
      >
        Sort DESC
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setSortType(0)}
      >
        Sort ASC
      </button>
      <Counter count={count1} increment={incrementCount1} name="Counter 1" />
      <Counter count={count2} increment={incrementCount2} name="Counter 2" />
    </div>
  );
}

const Counter = memo(function Counter(props) {
  const { count, increment, name } = props;
  console.log(name + ' -> rendered', props);
  return (
    <div>
      <p className="text-xl">
        {name}: {count}
      </p>
      <button
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment {name}
      </button>
    </div>
  );
});
