import "../styles/Accomodation.css";
/* import accomodations from "../data/data.json"; */
import { useParams } from "react-router-dom";
import Error404 from "../pages/Error404";
import Gallery from "../components/Gallery";
/* import Dropdown from "../components/Dropdown"; */
import { useState, useEffect } from "react";

function Accomodation() {
  const { id } = useParams();
  const [accomodations, setAccomodations] = useState([]);
  const [accomodation, setAccomodation] = useState();

  useEffect(() => {
    fetch("../data/data.json").then((response) =>
      response
        .json()
        .then((data) => setAccomodations(data))
        .catch((err) => console.log(err))
    );
  }, []);

  useEffect(() => {
    const accomodation = accomodations.find(
      (accomodation) => accomodation.id === id
    );
    setAccomodation(accomodation ? accomodation : null);
  }, [id, accomodations, accomodation]);

  console.log(accomodations);
  console.log(accomodation);

  return accomodation ? (
    <section className="accomodation">
      <Gallery images={accomodation.pictures} />
    </section>
  ) : (
    <Error404 />
  );

  /* const tags = accomodation[0].tags;
  const host = accomodation[0].host;
  const description = accomodation[0].description;
  const equipements = accomodation[0].equipments;
  const pictures = accomodation[0].pictures;
  const rating = parseInt(accomodation[0].rating);
  

  

  const rate = (rating) => {
    const numberOfStar = [null, "one", "two", "three", "four", "five"];
    return "rating " + numberOfStar[rating];
  };

  return accomodation === !undefined ? (
    <section className="accomodation">
      <div className="accomodation__carousel">
        <div className="controls">
          {accomodation.pictures.length > 1 ? (
            <button className="controls__previous" onClick={() => previous()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          ) : null}
          <p>
            {galleryPosition + 1}/{accomodation.pictures.length}
          </p>
          {accomodation.pictures.length > 1 ? (
            <button className="controls__next" onClick={() => next()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          ) : null}
        </div>
        <img src={accomodation.pictures[galleryPosition]} alt="#" />
      </div>
      <div className="accomodation__info">
        <div className="accomodation__info__content">
          {<h1>{accomodation.title}</h1>}
          <p>{accomodation.location}</p>
          <ul className="tagsList">
            {accomodation.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="accomodation__info__content">
          <div className="profile">
            <p>{accomodation.host.name}</p>
            <img src={accomodation.host.picture} alt={accomodation.host.name} />
          </div>
          <div className={rate(accomodation.rating)}>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="accomodation__dorpdowns">
        <Dropdown title="Description" content={accomodation.description} />
        <Dropdown title="Equipement" content={accomodation.equipements} />
      </div>
    </section>
  ) : (
    <Error404 />
  ); */
}

export default Accomodation;
