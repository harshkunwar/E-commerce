import React from "react";
let a = 0;
let b
const Counter = () => {
  return (
    <div>
      <button onClick={() => (b=a,b+=1,a=b,console.log(b))}>Increament</button>
      {/* {b} */}
      <button onClick={() => (a -= 1)}>Decreamnet</button>
    </div>
  );
};

export default Counter;
