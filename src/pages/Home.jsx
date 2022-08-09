import "../styles/Home.css";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Home({ accomodations }) {
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
