import React from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import Listas from "../components/Listas/Listas";

function Directory() {
  return (
    <div>
      <Header />
      <div class="content">
        <h1>Directorio</h1>
      </div>
      <Listas />
      <Navbar />
    </div>
  );
}

export default Directory;
