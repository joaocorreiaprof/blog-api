import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts/display");
        if (!response.ok) {
          throw new Error("Failer to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`api/posts/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        console.error("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <>
      <div className="create-post">
        <Link to="/create-post">
          <button>Add post</button>
        </Link>
      </div>
      <div className="display-all-post-admin">
        {loading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="post-actions">
                <Link to={`/edit/${post.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </>
  );
};

export default Admin;
