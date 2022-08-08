import "../styles/Accomodation.css";
import accomodations from "../data/data.json";
import { useParams } from "react-router-dom";
import Error404 from "../pages/Error404";
import Dropdown from "../components/Dropdown";
import { useState } from "react";

function Accomodation() {
  const { id } = useParams();
  const accomodation = accomodations.filter(
    (accomodation) => accomodation.id === id
  );
  const tags = accomodation[0].tags;
  const host = accomodation[0].host;
  const description = accomodation[0].description;
  const equipements = accomodation[0].equipments;
  const pictures = accomodation[0].pictures;
  const rating = parseInt(accomodation[0].rating);
  const [galleryPosition, setGalleryPosition] = useState(0);

  const next = () => {
    galleryPosition < pictures.length - 1
      ? setGalleryPosition(galleryPosition + 1)
      : setGalleryPosition(0);
  };

  const previous = () => {
    galleryPosition > 0
      ? setGalleryPosition(galleryPosition - 1)
      : setGalleryPosition(pictures.length - 1);
  };

  const rate = (rating) => {
    const numberOfStar = [null, "one", "two", "three", "four", "five"];
    return "rating " + numberOfStar[rating];
  };

  return accomodation.length === 1 ? (
    <section className="accomodation">
      <div className="accomodation__carousel">
        <div className="controls">
          {pictures.length > 1 ? (
            <button className="controls__previous" onClick={() => previous()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          ) : null}
          <p>
            {galleryPosition + 1}/{pictures.length}
          </p>
          {pictures.length > 1 ? (
            <button className="controls__next" onClick={() => next()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          ) : null}
        </div>
        <img src={pictures[galleryPosition]} alt="#" />
      </div>
      <div className="accomodation__info">
        <div className="accomodation__info__content">
          <h1>{accomodation[0].title}</h1>
          <p>{accomodation[0].location}</p>
          <ul className="tagsList">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="accomodation__info__content">
          <div className="profile">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className={rate(rating)}>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="accomodation__dorpdowns">
        <Dropdown title="Description" content={description} />
        <Dropdown title="Equipement" content={equipements} />
      </div>
    </section>
  ) : (
    <Error404 />
  );
}

export default Accomodation;
