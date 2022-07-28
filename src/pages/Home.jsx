import data from '../data/data.json';
import Banner from "../components/Banner";
import{Link} from 'react-router-dom';

const accomodations = data.map((accomodation) => accomodation)
console.log(accomodations);

function Home() {
  return (
    <section className="home">
      <Banner title="Chez vous, partout et ailleurs" type="banner-home" />
      <div className="gallery">
        <ul>
          {accomodations.map((accomodation) => (
            <li key={accomodation.id}>
              <Link to={`/accomodation/${accomodation.id}`}>
                {accomodation.title}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
export default Home;
