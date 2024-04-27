import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
    isLoading: true,
    error: "",
    post: {},
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          isLoading: false,
          post: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          isLoading: false,
          post: {},
          error: "Something went wrong!",
        };
      default:
        return state;
    }
  };

export default function UseReducerDataFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
    }, []);
    
  return <div>
  {state.isLoading ? "date is loading" : state.post.body}
  {state.error ? state.error : null}
</div>;
}
