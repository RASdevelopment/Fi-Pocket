import React from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import Docs from "../components/Docs/Docs";

function Archive() {
  return (
    <div>
      <Header />
      <div class="content">
        <h1>Archivo</h1>
      </div>
      <Docs />
      <Navbar />
    </div>
  );
}

export default Archive;
