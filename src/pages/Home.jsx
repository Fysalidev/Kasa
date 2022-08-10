import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home({ accomodations }) {
  useEffect(() => {
    document.title = `Kasa - Home`;
  });

  return (
    <section className="home">
      <Banner title="Chez vous, partout et ailleurs" type="banner-home" />
      <div className="gallery">
        <ul>
          {accomodations.map((accomodation) => (
            <li key={accomodation.id}>
              <Link to={`/accomodation/${accomodation.id}`}>
                <Card title={accomodation.title} cover={accomodation.cover} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Home;
