import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/SinglePost.css";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="single-post-page-container">
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
      <Link to="/blog">
        <button>Back to blog</button>
      </Link>
    </div>
  );
};

export default SinglePost;
