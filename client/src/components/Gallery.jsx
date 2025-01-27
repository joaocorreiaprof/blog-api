import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.23.28 (1).jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.23.28.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.23.37.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.23.38.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.09.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.10.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.13.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.37.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.38.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.41.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.42.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.44 (1).jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.44.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.45.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.47.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.48 (1).jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.24.48.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.20.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.22.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.23.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.24.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.25 (1).jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.25.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.27.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.28.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.29.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.30 (1).jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.30.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.25.31.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.26.00 (1).jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.26.00.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.26.02.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.26.07.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.26.08.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.26.11.jpeg",
  "/images/gallery/WhatsApp Image 2025-01-27 at 15.26.16.jpeg",
];

const Gallery = () => {
  return (
    <>
      <div className="box">
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div className="slide" key={index}>
              <img alt="sample_file" src={URL} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default Gallery;
