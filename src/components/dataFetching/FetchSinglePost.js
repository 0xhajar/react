import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchMultiplePosts() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();
  const [buttonClickId, setButtonClickId] = useState();

  const handleClick = (e) => {
    setButtonClickId(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonClickId]);

  return (
    <div>
      <button type="button" value={id} onClick={handleClick}>
        Fetch post
      </button>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <h1>{posts.title}</h1>
    </div>
  );
}
