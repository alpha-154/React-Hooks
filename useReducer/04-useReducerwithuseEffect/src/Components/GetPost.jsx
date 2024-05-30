import React, { useEffect, useState } from "react";

function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
        console.log(data);
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("There was an error");
      });
  }, []);

  return (
    <div>
      {loading ? "loading" : post.title}
      {error || null}
    </div>
  );
}

export default GetPost;
