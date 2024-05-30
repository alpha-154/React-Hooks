import React, { useReducer } from "react";

//in this section of code initialState is an object instead of a
//variable

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + action.value };
    case "Decrement":
      return { ...state, counter: state.counter - action.value };
    case "Increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "Decrement2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};

function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100 gap-5">
      <div className="flex flex-col gap-2 items-center justify-center  bg-gray-100 ">
        <div className="">Count - {count.counter}</div>

        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => dispatch({ type: "Increment", value: 1 })}
        >
          Increment by 1
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => dispatch({ type: "Decrement", value: 1 })}
        >
          Decrement by 1
        </button>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center  bg-gray-100 ">
        <div className="">Count2 - {count.counter2}</div>

        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => dispatch({ type: "Increment2", value: 1 })}
        >
          Increment2 by 1
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold border border-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => dispatch({ type: "Decrement2", value: 1 })}
        >
          Decrement2 by 1
        </button>
      </div>
    </div>
  );
}

export default ComplexCounter;
