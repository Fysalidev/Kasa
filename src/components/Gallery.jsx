import "../styles/Gallery.css";
import { useState } from "react";

function Gallery({ images }) {
  const [galleryPosition, setGalleryPosition] = useState(0);

  const next = () => {
    galleryPosition < images.length - 1
      ? setGalleryPosition(galleryPosition + 1)
      : setGalleryPosition(0);
  };

  const previous = () => {
    galleryPosition > 0
      ? setGalleryPosition(galleryPosition - 1)
      : setGalleryPosition(images.length - 1);
  };

  return (
    <div className="accomodation__carousel">
      <div className="controls">
        {images.length > 1 ? (
          <button className="controls__previous" onClick={() => previous()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        ) : null}
        <p>
          {galleryPosition + 1}/{images.length}
        </p>
        {images.length > 1 ? (
          <button className="controls__next" onClick={() => next()}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        ) : null}
      </div>
      <img src={images[galleryPosition]} alt="#" />
    </div>
  );
}
export default Gallery;
