import '../styles/Card.css';

function Card({ title,cover }) {
  return (
    <div className="accomodation_card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
export default Card;