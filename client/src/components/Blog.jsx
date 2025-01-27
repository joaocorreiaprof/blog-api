import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts/display");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
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

  const getPreview = (content, length = 200) => {
    if (content.length <= length) return content;
    return content.slice(0, length) + "...";
  };

  return (
    <main className="blog-page-container">
      <h1>All Articles</h1>
      <div className="blog-posts-container">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="blog-post-card">
              <h3>{post.title}</h3>
              <p>{getPreview(post.content)}</p>
              <Link to={`/post/${post.id}`} className="read-more">
                Read more
              </Link>
            </div>
          ))
        ) : (
          <p className="no-posts">No posts available</p>
        )}
      </div>
    </main>
  );
};

export default Blog;
