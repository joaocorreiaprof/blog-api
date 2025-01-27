import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/edit/${id}`);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/posts/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        navigate("/admin");
      } else {
        console.error("Error updating post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            placeholder="Content"
          ></textarea>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default EditPost;
