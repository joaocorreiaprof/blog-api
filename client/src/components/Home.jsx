import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-first-div">
        <div className="home-title-text">
          <h1>Miles in Mind</h1>
          <p className="sub-title">Wandering through her eyes</p>
          <p className="home-about">
            Miles in Mind is a space where travel isn’t just about the places
            you go, but the emotions and stories you collect along the way.
            While I haven’t had the chance to explore the world as much as I’d
            like, I get to travel in a different way—through the words,
            experiences, and memories shared by someone whose journeys I hold
            close. This blog is my way of reflecting on the feelings that arise
            from hearing about their travels—the awe, the longing, the sense of
            wonder, and sometimes even the quiet moments that hold so much
            meaning. Each trip, each place, is more than just a destination;
            it’s an emotional experience that stretches beyond borders, deep
            into the heart. Through this blog, I invite you to walk beside me,
            to feel the excitement of each new adventure and the stillness of
            the moments that make us pause. It’s about more than just the places
            seen; it’s about the way we connect to the world, to others, and to
            ourselves.
          </p>
        </div>
        <div className="home-picture">
          <img
            src="../images/home-pic.jpg"
            alt="A man looking to the ocean"
            className="home-picture-class"
          />
        </div>
      </div>
      <div className="home-second-div"></div>
    </>
  );
};

export default Home;
