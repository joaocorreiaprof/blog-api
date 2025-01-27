import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Post created successfully!");
        console.log(data);
        setTimeout(() => navigate("/blog"), 2000);
      } else {
        const message = await response.text();
        setError(message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="create-post-container">
      <h1 className="create-post">New Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title" className="label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="content" className="label">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="input"
            rows="5"
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
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
