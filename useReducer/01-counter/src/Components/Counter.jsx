import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen bg-gray-100 ">
      <div className="">Count - {count}</div>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => dispatch("Increment")}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => dispatch("Decrement")}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
