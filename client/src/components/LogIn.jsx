import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make API call to log in
    const response = await fetch("api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.token);
      setUser({ email: data.email });
      navigate("/");
    } else {
      alert("Login failed: " + data.message);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

// Prop validation for setUser
LogIn.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LogIn;
