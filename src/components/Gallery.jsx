import '../styles/Gallery.css';

function Gallery(){
    return (
      <div className="accomodation__carrousel">
        <button className="slide-button-left">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slide-button-right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    );

}
export default Gallery;