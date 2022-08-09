import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Accomodation from "../pages/Accomodation";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Footer from "./Footer";
import Header from "./Header";
import Home from "../pages/Home";

function App() {
  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    fetch("../data/data.json").then((response) =>
      response
        .json()
        .then((data) => {
          setAccomodations(data);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  useEffect(() => {
    document.title = `Home`;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home accomodations={accomodations} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/accomodation/:id"
          element={<Accomodation accomodations={accomodations} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
