import React, { useReducer, useEffect } from "react";

//here, we're doing the same task as we did with `GetPost` file
//but , this approach is more optimized in the matter of state-management

const initialState = {
  loading: "true",
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "FAILURE":
      return {
        loading: false,
        post: {},
        error: "There was an error!!!!",
      };
    default:
      return state;
  }
};

function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", result: data });
        console.log(data);
      })
      .catch(() => {
        dispatch({ type: "FAILURE" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading...." : state.post.title}
      {state.error || null}
    </div>
  );
}

export default GetPost2;
