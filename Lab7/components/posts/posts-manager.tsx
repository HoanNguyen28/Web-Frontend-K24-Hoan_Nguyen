"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);


  const addPost = async () => {
    if (!newTitle || !newBody) return;
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: newTitle,
        body: newBody,
        userId: 1,
      });
      setPosts([...posts, res.data]);
      setNewTitle("");
      setNewBody("");
    } catch (err) {
      console.error(err);
    }
  };


  const updatePost = async (id: number) => {
    try {
      const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id,
        title: "Updated Title",
        body: "Updated body content",
        userId: 1,
      });
      setPosts(posts.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error(err);
    }
  };


  const deletePost = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Posts</h2>

      
      <div className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Post title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Post body"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          className="border p-2 rounded"
        />
        <Button onClick={addPost} variant="default">
          Add Post
        </Button>
      </div>


      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 items-start sm:items-center"
          >
            <div>
              <strong className="block">{post.title}</strong>
              <p>{post.body}</p>
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Button
                onClick={() => updatePost(post.id)}
                variant="secondary"
                size="sm"
              >
                Update
              </Button>
              <Button
                onClick={() => deletePost(post.id)}
                variant="destructive"
                size="sm"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
