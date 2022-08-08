import "../styles/Home.css";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Home() {
  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    fetch("../data/data.json").then((response) =>
      response
        .json()
        .then((data) => setAccomodations(data))
        .catch((err) => console.log(err))
    );
  }, []);

  console.log(accomodations);
/*   const kiki = accomodations.find(
    (accomodation) => accomodation.id === "c67ab8a7"
  );

  console.log(kiki) */
  

  return (
    <section className="home">
      <Banner title="Chez vous, partout et ailleurs" type="banner-home" />
      <div className="gallery">
        <ul>
          {accomodations.map((accomodation) => (
            <li key={accomodation.id}>
              <Link to={`/accomodation/${accomodation.id}`}>
                <Card title={accomodation.title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Home;
