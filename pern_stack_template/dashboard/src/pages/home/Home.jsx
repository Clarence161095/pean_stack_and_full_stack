import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [count1, setCount] = useState(0);
  const count2 = useRef(0);
  const [count3, setCount3] = useState(0);

  // This will be called when count1, count3 change
  useEffect(() => {
    // The client type something in input, and we want to send request to server
    console.log('onChange Home', count1, count2.current, count3);
  });

  // This will be called only once when component is mounted
  useEffect(() => {
    // Fetch data from server
    console.log('onInit Home', count1, count2.current, count3);
  }, []);

  useEffect(() => {
    console.log('onChange count3', count3);
  }, [count3]);

  useEffect(() => {
    // This will be called when component is destroyed, you can clear interval, clear timeout, clear listener here
    return () => {
      console.log('onDestroy Home', count1, count2.current, count3);
    }
  }, []);

  return (
    <>
      <h1>Learn about useEffect concept</h1>
      <p>This is Home page.</p>
      <button onClick={() => setCount(count1 + 1)}>Click me 1</button>
      <br />
      <button onClick={() => {
        count2.current++;
      }}>Click me 2</button>
      <br />
      <button onClick={() => setCount3(count3 + 1)}>Click me 3</button>
    </>
  )
}
