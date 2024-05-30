import React, { useReducer } from "react";
import { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const counterContext = createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-gray-400">
      <div>Count: {count}</div>
      <counterContext.Provider value={{ counterDispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}

export default App;
