import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseStateDataFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setIsLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setIsLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);
  return (
    <div>
      {isLoading ? "date is loading" : post.body}
      {error ? error : null}
    </div>
  );
}
