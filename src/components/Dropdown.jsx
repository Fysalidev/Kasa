import "../styles/Dropdown.css";

function Dropdown({ title, content }) {
  return (
    <div className="dropdown">
      <div className="dropdown-button">
        <h2>{title}</h2>
        <button className="dropbtn">
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div className="dropdown-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
export default Dropdown;
