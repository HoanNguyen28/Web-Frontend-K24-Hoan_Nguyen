


interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsUserProps {
  limit?: number; 
}

export default async function PostsUser({ limit = 10 }: PostsUserProps) {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post List</h1>
      <ul>
        {posts.slice(0, limit).map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
