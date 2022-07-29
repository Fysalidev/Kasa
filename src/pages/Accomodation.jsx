import "../styles/Accomodation.css";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Error404 from "../pages/Error404";
import Dropdown from "../components/Dropdown";

function Accomodation() {
  const { id } = useParams();
  const accomodation = data.filter((accomodation) => accomodation.id === id);
  const tags = accomodation[0].tags;

  return accomodation.length === 1 ? (
    <section className="accomodation">
      <div className="accomodation__carrousel">
        <button className="slide-button-left">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slide-button-right">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="accomodation__info">
        <div className="accomodation__info__content">
          <h1>{accomodation[0].title}</h1>
          <p>{accomodation[0].location}</p>
          <ul className="tagsList">
            {tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="accomodation__info__content">
          <div className="profile">
            <span>Nom</span>
            <span>Prénom</span>
            <span>Photo</span>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star-sharp"></i>
            <i class="fa-solid fa-star-sharp"></i>
            <i class="fa-solid fa-star-sharp"></i>
            <i class="fa-solid fa-star-sharp"></i>
            <i class="fa-solid fa-star-sharp"></i>
          </div>
        </div>
      </div>
      <div className="accomodation__dorpdowns">
        <Dropdown
          title="Description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dropdown
          title="Equipement"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  ) : (
    <Error404 />
  );
}

export default Accomodation;
