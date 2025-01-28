import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="project-title">
          <h3>Miles in Mind</h3>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/joaocorreiaprof/blog-api"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contact-info">
          <p>Contact: joaocorreiaprof@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
