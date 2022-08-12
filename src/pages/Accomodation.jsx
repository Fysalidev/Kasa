import "../styles/Accomodation.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Dropdown from "../components/Dropdown";
import Error404 from "./Error404";
import Gallery from "../components/Gallery";
import Informations from "../components/Informations";

function Accomodation({ accomodations }) {
  useEffect(() => {
    document.title = `Kasa - Accomodations`;
  });

  const { id } = useParams();
  const accomodation = accomodations.find(
    (accomodation) => accomodation.id === id
  );

  return accomodation ? (
    <main>
      <section className="accomodation">
        <Gallery images={accomodation.pictures} />
        <Informations accomodation={accomodation} />
        <div className="accomodation__dorpdowns">
          <Dropdown title="Description" content={accomodation.description} />
          <Dropdown title="Equipement" content={accomodation.equipments} />
        </div>
      </section>
    </main>
  ) : (
    <Error404 />
  );
}

export default Accomodation;
