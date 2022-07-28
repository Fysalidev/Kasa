import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Error404 from "../pages/Error404";

function Accomodation() {
  const { id } = useParams();
  const accomodation = data.filter(
    (accomodation) => accomodation.id === id
  );

  if (accomodation.length === 1) {
    return (
      <section className="accomodation">
        <h1>{accomodation[0].title}</h1>
      </section>
    );
  } else {
    return <Error404 />;
  }
}

export default Accomodation;
