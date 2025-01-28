import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/SinglePost.css";
import PropTypes from "prop-types";

const SinglePost = ({ user }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  // Comments
  const [formData, setFormData] = useState({
    content: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!user) {
      setError("You need to be logged to comment.");
      return;
    }

    try {
      const response = await fetch("/api/comments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ ...formData, postId: id, userId: user.id }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Comment created successfully!");
        console.log(data);
        window.location.reload();

        setFormData({ content: "" });
      } else {
        const message = await response.text();
        setError(message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

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

    const fetchComment = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authorization token is missing.");
        }

        const commentResponse = await fetch(
          `/api/comments/all-comments-per-post/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!commentResponse.ok) {
          throw new Error("Failed to fetch comments");
        }

        const commentsData = await commentResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchPost();
    fetchComment();
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
      <div className="comments">
        {user ? (
          <form className="create-comment-form" onSubmit={handleSubmit}>
            <div className="input-comment">
              <label htmlFor="content" className="comment-label">
                Comment:
              </label>
              <input
                type="text"
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            {error && (
              <p className="error" aria-live="polite">
                {error}
              </p>
            )}
            {success && (
              <p className="success" aria-live="polite">
                {success}
              </p>
            )}
            <button type="submit" className="button">
              Comment
            </button>
          </form>
        ) : (
          <p>
            You need to log in to send/view comments.{" "}
            <Link to="/log-in">Log In</Link>.
          </p>
        )}

        <div className="displayAllComments">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-avatar">
                  {comment.user.username.charAt(0).toUpperCase(0)}
                </div>
                <p className="comment-content">{comment.content}</p>
                <p className="comment-author">{comment.user.username}</p>
              </div>
            ))
          ) : (
            <p>No comments!</p>
          )}
        </div>
      </div>
    </div>
  );
};

SinglePost.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default SinglePost;
