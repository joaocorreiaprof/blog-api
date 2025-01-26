import "../styles/Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  "/images/valencia-street-three.jpg",
  "/images/valencia-street.jpg",
  "/images/valencia-street-two.jpg",
  "/images/food.jpg",
];

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
      <div className="box">
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div className="slide" key={index}>
              <img alt="sample_file" src={URL} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="home-second-div">
        <div className="home-picture">
          <img
            src="../images/this.jpg"
            alt="A man looking to the ocean"
            className="home-picture-class"
          />
        </div>
        <div className="home-title-text">
          <h1>Valencia</h1>
          <p className="sub-title">Where the Journey Begins</p>
          <p className="home-about">
            Every journey has a beginning, and this one starts in the heart of
            Spain, in a small town just outside Valencia called Burjassot.
            It&apos;s here, amidst the warm Mediterranean air and vibrant
            streets, that stories begin to unfold—stories of discovery, culture,
            and connection. Valencia, with its timeless charm, is more than just
            a city; it&apos;s an experience. From the intricate patterns of
            historic domes to the lively energy of its markets and the gentle
            rhythm of the sea, this place invites you to slow down, breathe, and
            take it all in. In Burjassot, life feels quieter, more personal—like
            a whisper of the larger world waiting just beyond. Through this
            journey, I’m reminded that every place, no matter how far or near,
            carries a feeling—a moment waiting to be captured. Valencia isn’t
            just a backdrop; it’s the first chapter of something bigger,
            something more meaningful. And through the stories and images
            shared, I find myself traveling too—one step, one thought, one
            emotion at a time.
          </p>
        </div>
      </div>
      <div className="home-third-div"></div>
    </>
  );
};

export default Home;
