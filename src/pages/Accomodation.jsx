import "../styles/Accomodation.css";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import Gallery from "../components/Gallery";
import Informations from "../components/Informations";
import Dropdown from "../components/Dropdown";

function Accomodation({accomodations}) {
  const { id } = useParams();
  const accomodation = accomodations.find((accomodation) => accomodation.id === id);

  return accomodation ? (
    <section className="accomodation">
      <Gallery images={accomodation.pictures} />
      <Informations accomodation={accomodation} />
      <div className="accomodation__dorpdowns">
        <Dropdown title="Description" content={accomodation.description} />
        <Dropdown title="Equipement" content={accomodation.equipments} />
      </div>
    </section>
  ) : (
    <Error404 />
  );

  
  



  

 /*  const rate = (rating) => {
    const numberOfStar = [null, "one", "two", "three", "four", "five"];
    return "rating " + numberOfStar[rating];
  };
 */
  /* return loading && accomodationLoading ? (
    <section className="accomodation">
      <Gallery images={accomodation.pictures} />
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
  ) 
  : (
    <Error404 />
  ); */

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
