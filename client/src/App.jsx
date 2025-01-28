import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import "./styles/App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import SinglePost from "./components/SinglePost";
import Gallery from "./components/Gallery";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = JSON.parse(atob(token.split(".")[1]));
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <Router>
      <div className="general-content">
        <Header user={user} setUser={setUser} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/post/:id" element={<SinglePost user={user} />} />
            <Route path="/log-in" element={<LogIn setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute user={user} allowedRoles={["AUTHOR"]}>
                  <Admin user={user} setUser={setUser} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
