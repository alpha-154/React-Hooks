import React, { useReducer } from "react";

//here , we'll be doing the same task as we did in the `ComplexCounter`
//section but in more optimised way with using multiple reducers

const initialState = 0;
const initialState2 = 5;


//additionally i've added a condition in the state to have more clear
//observation of what's happening in the code

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state < 10 ? state + 1 : state;
    case "Decrement":
      return state > -5 ? state - 1 : state;
    default:
      return state;
  }
};

function ComplexCounter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const [count2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <div className="flex justify-center items-center gap-5 min-h-screen">
      <div className="flex flex-col gap-2 items-center justify-center  bg-gray-100 ">
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

      <div className="flex flex-col gap-2 items-center justify-center bg-gray-100 ">
        <div className="">Count2 - {count2}</div>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => dispatch2("Increment")}
        >
          Increment2
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => dispatch2("Decrement")}
        >
          Decrement2
        </button>
      </div>
    </div>
  );
}

export default ComplexCounter2;
