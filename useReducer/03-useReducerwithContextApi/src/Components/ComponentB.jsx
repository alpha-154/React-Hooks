import React, { useContext } from "react";
import { counterContext } from "../App";

function ComponentB() {
  const countContext = useContext(counterContext);

  return (
    <div>
      <p className="text-center text-xl text-blue-600">Component B</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-4"
        onClick={() => countContext.counterDispatch("Increment")}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => countContext.counterDispatch("Decrement")}
      >
        Decrement
      </button>
    </div>
  );
}

export default ComponentB;
