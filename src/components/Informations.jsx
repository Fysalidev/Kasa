import "../styles/Informations.css";
import Starsrating from "../components/Starsrating";

function Informations({ accomodation }) {
  return (
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
      <div className="accomodation__info__content responsive">
        <div className="profile">
          <p>{accomodation.host.name}</p>
          <img src={accomodation.host.picture} alt={accomodation.host.name} />
        </div>
        <Starsrating rating={accomodation.rating} />
      </div>
    </div>
  );
}

export default Informations;
