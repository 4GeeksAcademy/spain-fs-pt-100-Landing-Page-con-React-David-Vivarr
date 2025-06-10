import React from "react";
import Navbar from "./js/components/Navbar"; // default export
import Jumbotron from "./js/components/Jumbotron"; // default export
import Card from "./js/components/Card"; // default export
import Footer from "./js/components/Footer"; // default export

const Home = () => {
  return (
    <div id="app">
      <div className="main-content">
        <Navbar />
        <Jumbotron />
        <div className="container my-5">
          <div className="row justify-content-center">
            <Card
              image="https://picsum.photos/500/325"
              title="Tarjeta 1"
              text="Contenido de la tarjeta 1"
              buttonUrl="#"
              buttonLabel="Ver más"
            />
            <Card
              image="https://picsum.photos/500/325?1"
              title="Tarjeta 2"
              text="Contenido de la tarjeta 2"
              buttonUrl="#"
              buttonLabel="Ver más"
            />
            <Card
              image="https://picsum.photos/500/325?2"
              title="Tarjeta 3"
              text="Contenido de la tarjeta 3"
              buttonUrl="#"
              buttonLabel="Ver más"
            />
            <Card
              image="https://picsum.photos/500/325?3"
              title="Tarjeta 4"
              text="Contenido de la tarjeta 4"
              buttonUrl="#"
              buttonLabel="Ver más"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
