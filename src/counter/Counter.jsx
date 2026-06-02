import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

//   const myfunc = () => {
//     return setCount(count + 1);
//   };
//   const myfuncSec = () => {
//     return setCount(count - 1);
//   };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count+1)}> INCREASE</button>
      <button> DECREASE</button>
    </>
  );
};

export default Counter;
