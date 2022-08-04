import "../styles/Accomodation.css";
import accomodations from "../data/data.json";
import { useParams } from "react-router-dom";
import Error404 from "../pages/Error404";
import Dropdown from "../components/Dropdown";



function Accomodation() {
  const { id } = useParams();
  const accomodation = accomodations.filter((accomodation) => accomodation.id === id);
  const tags = accomodation[0].tags;
  const host = accomodation[0].host;
  const description = accomodation[0].description;
  const equipements = accomodation[0].equipments;



  return accomodation.length === 1 ? (
    <section className="accomodation">
      <div className="accomodation__carrousel">
        <button className="slide-button-left">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slide-button-right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
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
            <span>{host.name}</span>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="accomodation__dorpdowns">
        <Dropdown
          title="Description"
          content={description}
        />
        <Dropdown
          title="Equipement"
          content={equipements}
        />
      </div>
    </section>
  ) : (
    <Error404 />
  );
}

export default Accomodation;
