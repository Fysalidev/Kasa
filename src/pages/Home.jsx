import "../styles/Home.css";
import accomodations from "../data/data.json";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import {useEffect} from "react";


function Home() {
  useEffect(() => {
    fetch('./data/data.json').then(res => res.json()).then(data => console.log(data))
  },[]);
  
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
