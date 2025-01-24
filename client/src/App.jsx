import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import "./styles/App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
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
            <Route path="/about" element={<About />} />
            <Route path="/log-in" element={<LogIn setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
