import "../styles/Dropdown.css";
import { useState } from "react";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown grow1">
      <div className="dropdown-button">
        <h2>{title}</h2>
        <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
          <i
            className={
              isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
            }
          ></i>
        </button>
      </div>
      <div className={isOpen ? "dropdown-content show" : "dropdown-content"}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        ) : (
          <div>
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Dropdown;
